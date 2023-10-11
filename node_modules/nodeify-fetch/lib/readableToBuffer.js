const concat = require('concat-stream')

function readableToBuffer (readable) {
  return new Promise((resolve, reject) => {
    const stream = concat()

    readable.on('error', reject)

    readable.on('end', () => {
      resolve(stream.getBody())
    })

    readable.pipe(stream)
  })
}

module.exports = readableToBuffer
