const Readable = require('readable-stream')

class ReadableError extends Readable {
  constructor (err) {
    super({
      read: () => {
        this.emit('error', err)
      }
    })
  }
}

module.exports = ReadableError
