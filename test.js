const tape = require('tape')
const distance = require('./')

tape('distance', function (t) {
    t.same(distance(Uint8Array.from([1, 0]), Uint8Array.from([0, 1])), Uint8Array.from([1, 1]))
    t.same(distance(Uint8Array.from([1, 1]), Uint8Array.from([0, 1])), Uint8Array.from([1, 0]))
    t.same(distance(Uint8Array.from([1, 1]), Uint8Array.from([1, 1])), Uint8Array.from([0, 0]))
    t.end()
})

tape('compare', function (t) {
    t.same(distance.compare(Uint8Array.from([0, 0]), Uint8Array.from([0, 1])), -1)
    t.same(distance.compare(Uint8Array.from([0, 1]), Uint8Array.from([0, 1])), 0)
    t.same(distance.compare(Uint8Array.from([1, 1]), Uint8Array.from([0, 1])), 1)
    t.end()
})

tape('shorthands', function (t) {
    t.ok(distance.lt(Uint8Array.from([0, 0]), Uint8Array.from([0, 1])))
    t.ok(distance.eq(Uint8Array.from([0, 1]), Uint8Array.from([0, 1])))
    t.ok(distance.gt(Uint8Array.from([1, 1]), Uint8Array.from([0, 1])))
    t.end()
})

tape('strings', function (t) {
    const foo = distance.stringToArrayBuffer('foo')
    const bar = distance.stringToArrayBuffer('bar')
    const baz = distance.stringToArrayBuffer('baz')
    t.same(Array.from(foo), [102, 111, 111])
    t.same(Array.from(bar), [98, 97, 114])
    t.ok(distance.gt(distance(foo, bar), distance(foo, baz)))
    t.end()
})