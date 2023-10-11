# nodeify-fetch

The `nodeify-fetch` packages provides a node stream interface for [fetch](https://fetch.spec.whatwg.org/).
It's based on `isomorphic-fetch` for node and browser support.

## Usage

The only difference to the fetch standard is the `.body` property.
`nodeify-fetch` patches the `.body` to a readable stream: 

```
const fetch = require('nodeify-fetch')

fetch('url').then(res) => {
  res.body.on('data', (chunk) => {
    ...
  })

  res.body.on('end', () => {
    ...
  })
})
```
