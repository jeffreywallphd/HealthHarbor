# readable-error

A readable stream which emits an error.
The error given to the constructor will be emitted after the first read attempt.

## Usage

Just give the error to the constructor:

```
const ReadableError = require('readable-error')

const stream = new ReadableError(new Error('test'))

stream.on('error', (err) => {
  console.log(err.message)
})

stream.resume()
```
