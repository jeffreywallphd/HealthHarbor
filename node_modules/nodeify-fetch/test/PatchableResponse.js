/* global describe, it */

const { deepStrictEqual, notStrictEqual, strictEqual } = require('assert')
const PatchableResponse = require('../lib/PatchableResponse')

describe('PatchableResponse', () => {
  it('should be a constructor', () => {
    strictEqual(typeof PatchableResponse, 'function')
  })

  it('should wrap methods of the object', () => {
    let touched = false

    class Test {
      test () {
        touched = true
      }
    }

    const obj = new Test()
    const res = new PatchableResponse(obj, {})

    res.test()

    notStrictEqual(res.test, obj.test)
    strictEqual(touched, true)
  })

  it('should wrap properties of the object', () => {
    let value = 'initial'

    class Test {
      get test () {
        return value
      }

      set test (v) {
        value = v
      }
    }

    const obj = new Test()
    const res = new PatchableResponse(obj, {})

    strictEqual(res.test, 'initial')

    res.test = 'changed'

    strictEqual(res.test, 'changed')
  })

  it('should use patched properties and methods', () => {
    class Test {
      get property () {
        return 'test'
      }

      method () {
        return 'test'
      }
    }

    const method = () => {
      return 'patched'
    }

    const obj = new Test()
    const res = new PatchableResponse(obj, {
      property: 'patched',
      method: method
    })

    strictEqual(res.property, 'patched')
    strictEqual(res.method(), 'patched')
  })

  it('.properties should list all properties of the class', () => {
    class Test {
      test0 () {}
      test1 () {}
    }

    const properties = PatchableResponse.properties(new Test())

    deepStrictEqual(properties, ['constructor', 'test0', 'test1'])
  })
})
