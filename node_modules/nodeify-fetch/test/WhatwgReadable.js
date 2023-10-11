/* global describe, it */

const { strictEqual } = require('assert')
const WhatwgReadable = require('../lib/WhatwgReadable')

describe('WhatwgReadable', () => {
  it('should be a constructor', () => {
    strictEqual(typeof WhatwgReadable, 'function')
  })

  it('should emit an end event', () => {
    const whatwg = {
      read: () => {
        return Promise.resolve({ done: true })
      }
    }

    const readable = new WhatwgReadable(whatwg)

    return new Promise((resolve) => {
      readable.on('end', resolve)

      readable.resume()
    })
  })

  it('should emit an data event for each chunk', () => {
    let counter = 3

    const whatwg = {
      read: () => {
        if (counter > 0) {
          return Promise.resolve({ value: 'test' })
        } else {
          return Promise.resolve({ done: true })
        }
      }
    }

    const readable = new WhatwgReadable(whatwg)

    return new Promise((resolve) => {
      readable.on('data', (chunk) => {
        strictEqual(chunk.toString(), 'test')

        counter--
      })

      readable.on('end', resolve)
    })
  })

  it('should emit an error event if the read Promise rejects', () => {
    const whatwg = {
      read: () => {
        return Promise.reject(new Error('test'))
      }
    }

    const readable = new WhatwgReadable(whatwg)

    return new Promise((resolve) => {
      readable.on('error', (err) => {
        strictEqual(err.message, 'test')

        resolve()
      })

      readable.resume()
    })
  })
})
