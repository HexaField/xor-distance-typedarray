# xor-distance-typedarray

Calculate the xor distance between two buffers as a new buffer and compare computed distances with eachother

```
npm install xor-distance-typedarray
```

## Original

https://github.com/mafintosh/xor-distance

## Usage

``` js
const distance = require('xor-distance-typedarray')

const foo = distance.stringToArrayBuffer('foo')
const bar = distance.stringToArrayBuffer('bar')
const baz = distance.stringToArrayBuffer('baz')

const dist1 = distance(foo, bar)
const dist2 = distance(foo, baz)

// the following returns true since the distance between foo and bar
// is greater than the distance between foo and baz
console.log(distance.gt(dist1, dist2))
```

## License

MIT
