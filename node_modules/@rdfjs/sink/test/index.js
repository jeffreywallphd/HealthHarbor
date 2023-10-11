/* global it */

const assert = require('assert')
const waitFor = require('./support/waitFor')
const Readable = require('readable-stream')

function expectError (p) {
  return new Promise((resolve, reject) => {
    Promise.resolve().then(() => {
      return p()
    }).then(() => {
      reject(new Error('no error thrown'))
    }).catch(() => {
      resolve()
    })
  })
}

function test (Sink, options) {
  options = options || {}

  it('should be a constructor', () => {
    assert.equal(typeof Sink, 'function')
  })

  it('should have a .import method', () => {
    const sink = new Sink()

    assert.equal(typeof sink.import, 'function')
  })

  if (options.readable) {
    it('.import should return a Stream instance', () => {
      const sink = new Sink()
      const input = new Readable({read: () => {}})
      const stream = sink.import(input)

      assert(stream.readable)
    })
  }

  it('should forward the error event', () => {
    const input = new Readable()

    input._read = () => {
      input.emit('error', new Error(''))
    }

    return expectError(() => {
      const sink = new Sink()
      const stream = sink.import(input)

      input.resume()
      stream.resume()

      return waitFor(stream)
    })
  })
}

module.exports = test
