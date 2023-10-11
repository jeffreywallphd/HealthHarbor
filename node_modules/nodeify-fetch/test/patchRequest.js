/* global describe, it */

const { deepStrictEqual, strictEqual } = require('assert')
const patchRequest = require('../lib/patchRequest')
const Readable = require('readable-stream')

describe('patchRequest', () => {
  it('should accept null options', () => {
    return patchRequest()
  })

  it('should ignore the body if it\'s not a stream', () => {
    const body = 'test'

    return patchRequest({ body }).then((options) => {
      strictEqual(options.body, body)
    })
  })

  it('should convert a string stream to a string', () => {
    const body = new Readable({
      objectMode: true,
      read: () => {
        body.push('test')
        body.push('1234')
        body.push(null)
      }
    })

    return patchRequest({ body }).then((options) => {
      strictEqual(options.body, 'test1234')
    })
  })

  it('should convert a buffer stream to a string', () => {
    const body = new Readable({
      read: () => {
        body.push(Buffer.from('test'))
        body.push(Buffer.from('1234'))
        body.push(null)
      }
    })

    return patchRequest({ body }).then((options) => {
      strictEqual(Buffer.isBuffer(options.body), true)
      deepStrictEqual(options.body, Buffer.from('test1234'))
    })
  })
})
