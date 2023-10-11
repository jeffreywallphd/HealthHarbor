/* global describe, it */

const { deepStrictEqual, strictEqual } = require('assert')
const readableToBuffer = require('../lib/readableToBuffer')
const Readable = require('readable-stream')

describe('readableToBuffer', () => {
  it('should be a function', () => {
    strictEqual(typeof readableToBuffer, 'function')
  })

  it('should concat multiple chunks into a Buffer', () => {
    const readable = new Readable({
      read: () => {
        readable.push(Buffer.from('test'))
        readable.push(Buffer.from('1234'))
        readable.push(null)
      }
    })

    return readableToBuffer(readable).then(buffer => {
      deepStrictEqual(buffer, Buffer.from('test1234'))
    })
  })

  it('should concat multiple string chunks into a string', () => {
    const readable = new Readable({
      objectMode: true,
      read: () => {
        readable.push('test')
        readable.push('1234')
        readable.push(null)
      }
    })

    return readableToBuffer(readable).then(str => {
      strictEqual(str, 'test1234')
    })
  })
})
