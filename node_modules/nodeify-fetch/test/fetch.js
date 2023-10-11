/* global after, before, describe, it */

const { strictEqual } = require('assert')
const fetch = require('..')
const server = require('./support/server')

describe('fetch', () => {
  before(() => {
    if (server.init) {
      return server.init().then(() => {
        server.init = null
      })
    }
  })

  after(() => {
    return server.stop()
  })

  it('response .body should be a stream', () => {
    return fetch('http://localhost:8081/plain-text').then((response) => {
      strictEqual(typeof response.body, 'object')
      strictEqual(response.body.readable, true)
    })
  })

  it('response .body should forward the content', () => {
    return fetch('http://localhost:8081/plain-text').then((response) => {
      return new Promise((resolve) => {
        let content = ''

        response.body.on('end', () => {
          strictEqual(content, 'text')

          resolve()
        })

        response.body.on('data', (chunk) => {
          content += chunk
        })
      })
    })
  })
})
