function waitFor (stream) {
  return new Promise((resolve, reject) => {
    stream.on('end', resolve)
    stream.on('error', reject)
  })
}

module.exports = waitFor
