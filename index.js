module.exports = dist

function dist(a, b) {
    if (a.length !== b.length) throw new Error('Inputs should have the same length')
    const result = new Uint8Array(new ArrayBuffer(a.length))
    for (let i = 0; i < a.length; i++) result[i] = a[i] ^ b[i]
    return result
}

dist.compare = function compare(a, b) {
    if (a.length !== b.length) throw new Error('Inputs should have the same length')
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) continue
        return a[i] < b[i] ? -1 : 1
    }
    return 0
}

dist.gt = function gt(a, b) {
    return dist.compare(a, b) === 1
}

dist.lt = function lt(a, b) {
    return dist.compare(a, b) === -1
}

dist.eq = function eq(a, b) {
    return dist.compare(a, b) === 0
}

dist.stringToArrayBuffer = function (str) {
    if (/[\u0080-\uffff]/.test(str)) {
        throw new Error("this needs encoding, like UTF-8");
    }
    const arr = new Uint8Array(str.length);
    for (let i = str.length; i--;)
        arr[i] = str.charCodeAt(i);
    return arr;
}

dist.arrayBufferToString = function (buffer) {
    const arr = new Uint8Array(buffer);
    const str = String.fromCharCode.apply(String, arr);
    if (/[\u0080-\uffff]/.test(str)) {
        throw new Error("this string seems to contain (still encoded) multibytes");
    }
    return str;
}
