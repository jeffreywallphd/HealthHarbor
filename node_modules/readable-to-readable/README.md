# readable-to-readable

`ReadableToReadable` forwards the data of another `Readable`.
This can be useful if a Readable must be wrapped into another `Readable`.

## Usage

The package exports the `ReadableToReadable` class.
It can be imported like this:

```javascript
const ReadableToReadable = require('readable-to-readable')
````

### ReadableToReadable (input, { map, ... })

The `ReadableToReadable` class can be used as a base class to create the new `Readable`.
The constructor must be called with the input stream as the first parameter.
The following optional options can be given as the second argument:
 
- `end`: Close the instance at the end of the input stream. (default: `false`)
- `map`: A function that translates the incoming chunks.
- others: Any other arguments will be forwarded to the `Readable` constructor.

### ReadableToReadable.readFrom (input, { map })

The `readFrom` function returns a `read` function for `Readable` instances.
It will forward the chunks from the given `input` `Readable`.
The function can be useful to create more customized instances of `Readable`.
The following optional options can be given as the second argument:

- `end`: Close the output stream at the end of the input stream. (default: `false`)
- `map`: A function that translates the incoming chunks.

The function returns `true` when the end of the input stream is reached and `false` for the case that the readable buffer is full. 

## Example

Two streams are created in this example.
Data is pushed to the `input` stream and read from the `output` stream.
The `output` stream is a `ReadableToReadable` that takes care of forwarding and also translated the string to upper case.
Once the data passed the two streams, it's written to the console.
This is done until the `output` is finished.

```javascript
const { promisify } = require('util')
const { finished, Readable } = require('readable-stream')
const ReadableToReadable = require('..')

async function main () {
  // just a plain Readable to push some data
  const input = new Readable({
    read: () => {}
  })

  // in the output stream we forward the data from input whenever .read is called
  const output = new ReadableToReadable(input, {
    map: chunk => chunk.toString().toUpperCase()
  })

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
```
