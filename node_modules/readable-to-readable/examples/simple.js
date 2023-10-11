const { promisify } = require('util')
const { finished, Readable } = require('readable-stream')
const ReadableToReadable = require('..')

async function main () {
  // just a plain Readable to push some data
  const input = new Readable({
    read: () => {}
  })

  // in the output stream we forward the data from input whenever read is called
  const output = new ReadableToReadable(input, {
    map: chunk => chunk.toString().toUpperCase()
  })

  // alternative using the Readable constructor and attach the read method from readFrom
  /* const output = new Readable({
    read: ReadableToReadable.readFrom(input, {
      map: chunk => chunk.toString().toUpperCase()
    })
  }) */

  // add some data and close the stream
  input.push('a')
  input.push('b')
  input.push('c')
  input.push(null)

  // write each chunk to the console
  output.on('data', chunk => console.log(chunk.toString()))

  // wait till the end event of output was emitted
  await promisify(finished)(output)
}

main()
