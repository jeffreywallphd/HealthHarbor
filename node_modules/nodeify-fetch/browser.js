const crossFetch = require('cross-fetch')
const patchRequest = require('./lib/patchRequest')
const patchResponse = require('./lib/patchResponse')

function fetch (url, options) {
  return patchRequest(options).then((options) => {
    return crossFetch(url, options).then((res) => {
      return patchResponse(res)
    })
  })
}

fetch.Headers = crossFetch.Headers

module.exports = fetch
