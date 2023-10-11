const ArrayBufferReadable = require('./ArrayBufferReadable')
const PatchableResponse = require('./PatchableResponse')
const ReadableError = require('readable-error')
const WhatwgReadable = require('./WhatwgReadable')

function patch (res) {
  // not implemented in Firefox 51
  /* if (!res.body) {
    return res
  } */

  if (res.bodyUsed) {
    res.body = new ReadableError(new Error('body already in use'))
  } else if (res.body && res.body.getReader) {
    // replace respsonse with a patchable implementation
    res = new PatchableResponse(res, {
      body: new WhatwgReadable(res.body.getReader())
    })
  } else if (res.body && res.body.readable) {
  } else {
    res.body = new ArrayBufferReadable(() => {
      return res.arrayBuffer()
    })
  }

  return res
}

module.exports = patch
