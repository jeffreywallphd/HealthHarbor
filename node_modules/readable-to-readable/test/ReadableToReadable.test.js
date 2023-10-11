const { strictEqual } = require('assert')
const getStream = require('get-stream')
const { describe, it } = require('mocha')
const delay = require('promise-the-world/delay')
const { finished, Readable } = require('readable-stream')
const ReadableToReadable = require('..')

describe('ReadableToReadable', () => {
  it('should be a constructor', () => {
    strictEqual(typeof ReadableToReadable, 'function')
  })

  it('should trigger end if input emits end', async () => {
    let end = false
    const input = new Readable({ read: () => {} })
    const output = new ReadableToReadable(input)

    output.once('end', () => {
      end = true
    })

    input.push(null)

    await getStream(output)

    strictEqual(end, true)
  })

  it('should forward the chunks of input', async () => {
    const input = new Readable({ read: () => {} })
    const output = new ReadableToReadable(input)

    input.push('a')
    input.push('b')
    input.push('c')
    input.push(null)

    const chunks = await getStream(output)

    strictEqual(chunks.toString(), 'abc')
  })

  it('should set the high water mark if given', async () => {
    const input = new Readable({ read: () => {} })
    const output = new ReadableToReadable(input, { highWaterMark: 2 })

    strictEqual(output._readableState.highWaterMark, 2)
  })

  it('should work in object mode if given', async () => {
    const chunks = []
    const input = new Readable({ objectMode: true, read: () => {} })
    const output = new ReadableToReadable(input, { objectMode: true })

    input.push('a')
    input.push('bc')
    input.push(null)

    output.on('data', chunk => {
      chunks.push(chunk)
    })

    await getStream(output)

    strictEqual(chunks.length, 2)
    strictEqual(chunks[0], 'a')
    strictEqual(chunks[1], 'bc')
  })

  it('should use the given map function to translate the chunks', async () => {
    const input = new Readable({ read: () => {} })
    const output = new ReadableToReadable(input, { map: v => v.toString().toUpperCase() })

    input.push('a')
    input.push('b')
    input.push('c')
    input.push(null)

    const chunks = await getStream(output)

    strictEqual(chunks, 'ABC')
  })

  it('should not close at the end of input if end is false', async () => {
    let done = false
    const input = new Readable({ read: () => {} })
    const output = new ReadableToReadable(input, { end: false })

    input.push('a')
    input.push('b')
    input.push('c')
    input.push(null)

    finished(output, () => {
      done = true
    })

    output.resume()

    await delay(10)
    strictEqual(done, false)

    output.push(null)
    await delay(10)
    strictEqual(done, true)
  })

  describe('readFrom', () => {
    it('should be a function', () => {
      strictEqual(typeof ReadableToReadable.readFrom, 'function')
    })

    it('should trigger end if input emits end', async () => {
      let end = false
      const input = new Readable({ read: () => {} })
      const output = new Readable({ read: ReadableToReadable.readFrom(input) })

      output.once('end', () => {
        end = true
      })

      input.push(null)

      await getStream(output)

      strictEqual(end, true)
    })

    it('should forward the chunks of input', async () => {
      const input = new Readable({ read: () => {} })
      const output = new Readable({ read: ReadableToReadable.readFrom(input) })

      input.push('a')
      input.push('b')
      input.push('c')
      input.push(null)

      const chunks = await getStream(output)

      strictEqual(chunks.toString(), 'abc')
    })

    it('should use the given map function to translate the chunks', async () => {
      const input = new Readable({ read: () => {} })
      const output = new Readable({
        read: ReadableToReadable.readFrom(input, {
          map: v => v.toString().toUpperCase()
        })
      })

      input.push('a')
      input.push('b')
      input.push('c')
      input.push(null)

      const chunks = await getStream(output)

      strictEqual(chunks, 'ABC')
    })

    it('should not close the output stream if end is false', async () => {
      let done = false
      const input = new Readable({ read: () => {} })
      const output = new Readable({
        read: ReadableToReadable.readFrom(input, { end: false })
      })

      input.push('a')
      input.push('b')
      input.push('c')
      input.push(null)

      finished(output, () => {
        done = true
      })

      output.resume()

      await delay(10)
      strictEqual(done, false)

      output.push(null)
      await delay(10)
      strictEqual(done, true)
    })

    it('should return false if the buffer is full', async () => {
      const input = new Readable({ read: () => {}, objectMode: true })
      const readFrom = ReadableToReadable.readFrom(input)
      const output = new Readable({
        objectMode: true,
        highWaterMark: 2,
        read: readFrom
      })

      input.push('a')
      input.push('b')
      input.push('c')
      input.push(null)

      const result = await readFrom.call(output)

      strictEqual(result, false)
    })

    it('should return true if the end of the stream is reached', async () => {
      const input = new Readable({ objectMode: true, read: () => {} })
      const readFrom = ReadableToReadable.readFrom(input)
      const output = new Readable({ objectMode: true, read: readFrom })

      input.push('a')
      input.push('b')
      input.push('c')
      input.push(null)

      const result = await readFrom.call(output)

      strictEqual(result, true)
    })
  })
})
