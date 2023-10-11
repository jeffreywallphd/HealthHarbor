const N3 = require('n3')
const rdf = require('@rdfjs/data-model')
const { finished } = require('readable-stream')
const ReadableToReadable = require('readable-to-readable')

class ParserStream extends ReadableToReadable {
  constructor (input, { baseIRI = '', factory = rdf } = {}) {
    const parser = new N3.StreamParser({ baseIRI, factory })

    super(parser, { objectMode: true })

    parser.on('prefix', (prefix, term) => {
      this.emit('prefix', prefix, term)
    })

    parser.on('error', err => {
      this.destroy(err)
    })

    finished(this, () => {
      parser.end()
    })

    input.pipe(parser)
  }
}

module.exports = ParserStream
