const { finished, Readable } = require('readable-stream')

function nextLoop () {
  return new Promise(resolve => setTimeout(resolve, 0))
}

class ReadableToReadable extends Readable {
  constructor (input, { end = true, map, ...args } = {}) {
    super({
      read: ReadableToReadable.readFrom(input, { end, map }),
      ...args
    })
  }

  static readFrom (input, { end = true, map = v => v } = {}) {
    let done = false

    finished(input, () => {
      done = true
    })

    const read = async function () {
      while (true) {
        const chunk = input.read()

        if (!chunk) {
          if (done && end) {
            this.push(null)
          }

          if (done) {
            return true
          }

          await nextLoop()
        } else {
          if (!this.push(map(chunk))) {
            return false
          }
        }
      }
    }

    return read
  }
}

module.exports = ReadableToReadable
