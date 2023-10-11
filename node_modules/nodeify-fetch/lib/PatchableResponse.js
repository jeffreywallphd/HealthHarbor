class PatchableResponse {
  constructor (obj, patch) {
    this.obj = obj

    Object.keys(patch).forEach((key) => {
      this[key] = patch[key]
    })

    PatchableResponse.properties(obj).forEach((key) => {
      if (key in this) {
        return
      }

      if (typeof this.obj[key] === 'function') {
        this[key] = (...args) => {
          this.obj[key].call(obj, args)
        }
      } else {
        Object.defineProperty(this, key, {
          get: () => {
            return this.obj[key]
          },
          set: (value) => {
            this.obj[key] = value
          },
          enumerable: true,
          configurable: true
        })
      }
    })
  }

  static properties (obj) {
    return Object.getOwnPropertyNames(Object.getPrototypeOf(obj))
  }
}

module.exports = PatchableResponse
