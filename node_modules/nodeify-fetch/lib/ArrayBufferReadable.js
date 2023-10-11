const Readable = require('readable-stream')

class ArrayBufferReadable extends Readable {
  constructor (callback) {
    let done = false

    super({
      read: () => {
        if (done) {
          return
        }

        done = true

        callback().then((arrayBuffer) => {
          this.push(Buffer.from(arrayBuffer))
          this.push(null)
        })
      }
    })
  }
}

module.exports = ArrayBufferReadable
