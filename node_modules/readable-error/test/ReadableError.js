/* global describe, it */

const assert = require('assert')
const ReadableError = require('..')

describe('ReadableError', () => {
  it('should be a constructor', () => {
    assert.equal(typeof ReadableError, 'function')
  })

  it('should have a readable interface', () => {
    const stream = new ReadableError(new Error('test'))

    assert(stream.readable)
    assert.equal(typeof stream.pipe, 'function')
    assert.equal(typeof stream.read, 'function')
  })

  it('should have throw an error', () => {
    const stream = new ReadableError(new Error('test'))

    return new Promise((resolve) => {
      stream.on('error', (err) => {
        assert.equal(err.message, 'test')

        resolve()
      })

      stream.resume()
    })
  })
})
