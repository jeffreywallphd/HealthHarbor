const readableToBuffer = require('./readableToBuffer')

function patch (options) {
  options = options || {}

  if (options.body && options.body.readable) {
    return readableToBuffer(options.body).then((buffer) => {
      options.body = buffer

      return options
    })
  } else {
    return Promise.resolve(options)
  }
}

module.exports = patch
