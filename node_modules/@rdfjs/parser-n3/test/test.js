const { strictEqual } = require('assert')
const getStream = require('get-stream')
const { describe, it } = require('mocha')
const sinkTest = require('@rdfjs/sink/test')
const stringToStream = require('string-to-stream')
const N3Parser = require('..')

describe('@rdfjs/parser-n3', () => {
  sinkTest(N3Parser, { readable: true })

  describe('.import', () => {
    it('should parse the given string triple stream', async () => {
      const nt = '<http://example.org/subject> <http://example.org/predicate> "object" .'
      const parser = new N3Parser()

      const stream = parser.import(stringToStream(nt))

      const results = await getStream.array(stream)
      const quad = results[0]

      strictEqual(quad.subject.termType, 'NamedNode')
      strictEqual(quad.subject.value, 'http://example.org/subject')

      strictEqual(quad.predicate.termType, 'NamedNode')
      strictEqual(quad.predicate.value, 'http://example.org/predicate')

      strictEqual(quad.object.termType, 'Literal')
      strictEqual(quad.object.value, 'object')

      strictEqual(quad.graph.termType, 'DefaultGraph')
    })

    it('should parse the given string quad stream', async () => {
      const nt = '<http://example.org/subject> <http://example.org/predicate> "object" <http://example.org/graph> .'
      const parser = new N3Parser()

      const stream = parser.import(stringToStream(nt))

      const results = await getStream.array(stream)
      const quad = results[0]

      strictEqual(quad.subject.termType, 'NamedNode')
      strictEqual(quad.subject.value, 'http://example.org/subject')

      strictEqual(quad.predicate.termType, 'NamedNode')
      strictEqual(quad.predicate.value, 'http://example.org/predicate')

      strictEqual(quad.object.termType, 'Literal')
      strictEqual(quad.object.value, 'object')

      strictEqual(quad.graph.termType, 'NamedNode')
      strictEqual(quad.graph.value, 'http://example.org/graph')
    })

    it('should emit prefix events for each prefix', async () => {
      const prefix1 = 'http://example.org/prefix1#'
      const prefix2 = 'http://example.org/prefix2#'

      const nt = `PREFIX p1: <${prefix1}>
        PREFIX p2: <${prefix2}>
        <http://example.org/subject> <http://example.org/predicate> "object" .`
      const parser = new N3Parser()
      const prefixes = {}

      const stream = parser.import(stringToStream(nt))

      stream.on('prefix', (prefix, namespace) => {
        prefixes[prefix] = namespace
      })

      await getStream.array(stream)

      strictEqual(typeof prefixes.p1, 'object')
      strictEqual(prefixes.p1.termType, 'NamedNode')
      strictEqual(prefixes.p1.value, prefix1)

      strictEqual(typeof prefixes.p2, 'object')
      strictEqual(prefixes.p2.termType, 'NamedNode')
      strictEqual(prefixes.p2.value, prefix2)
    })

    it('should handle parser errors', async () => {
      const nt = '1'
      const parser = new N3Parser()

      const stream = parser.import(stringToStream(nt))

      let error = null

      try {
        await getStream.array(stream)
      } catch (err) {
        error = err
      }

      strictEqual(typeof error, 'object')
      strictEqual(error.message.includes('literal'), true)
    })
  })
})
