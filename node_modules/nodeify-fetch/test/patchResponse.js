/* global describe, it */

const { strictEqual } = require('assert')
const patchResponse = require('../lib/patchResponse')
const { Readable } = require('readable-stream')

describe('patchResponse', () => {
  // not implemented in Firefox 51
  /* it('should do nothing if there is no body', () => {
    const res = {}

    patchResponse(res)

    strictEqual(typeof res.body, 'undefined')
  }) */

  it('should use .getReader if available', () => {
    let touched = false

    const reader = {
      read: () => {
        return Promise.resolve({
          value: 'test',
          done: true
        })
      }
    }

    let res = {
      body: {
        getReader: () => {
          touched = true

          return reader
        }
      }
    }

    res = patchResponse(res)

    res.body.resume()

    return new Promise((resolve) => {
      res.body.on('end', () => {
        strictEqual(touched, true)

        resolve()
      })

      res.body.resume()
    })
  })

  it('should forward body, if it\'s already a readable', () => {
    const stream = new Readable()

    let res = {
      body: stream
    }

    res = patchResponse(res)

    strictEqual(stream, res.body)
  })

  it('should emit an error if body is already in use', () => {
    let res = {
      body: {},
      bodyUsed: true
    }

    res = patchResponse(res)

    return new Promise((resolve) => {
      res.body.on('error', resolve)

      res.body.resume()
    })
  })

  it('should use .arrayBuffer if there is no stream', () => {
    let touched = false

    let res = {
      body: {},
      arrayBuffer: () => {
        touched = true

        return Promise.resolve('test')
      }
    }

    res = patchResponse(res)

    return new Promise((resolve) => {
      res.body.on('end', () => {
        strictEqual(touched, true)

        resolve()
      })

      res.body.resume()
    })
  })
})
