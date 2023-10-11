const Readable = require('readable-stream')

class WhatwgReadable extends Readable {
  constructor (stream) {
    super({
      read: () => {
        stream.read().then((chunk) => {
          if (chunk.done) {
            this.push(null)
          } else {
            this.push(Buffer.from(chunk.value))
          }
        }).catch((err) => {
          this.emit('error', err)
        })
      }
    })
  }
}

module.exports = WhatwgReadable
