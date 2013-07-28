# dedupe

[![Build Status](https://travis-ci.org/zaphod1984/dust-compressor.png)](https://travis-ci.org/zaphod1984/dust-compressor)
[![NPM version](https://badge.fury.io/js/dust-compressor.png)](http://badge.fury.io/js/dust-compressor)

removes duplicates from your array.

## primitive types
```javascript
var a = [1,2,2,3];
var b = dedupe(a);
console.log(b);

//result: [1,2,3];
```

## complex types
```javascript
var aa = [{a:2},{a:1},{a:1},{a:1}];
var bb = dedupe(aa);
console.log(bb);

//result: [{a:2},{a:1}]
```

## complex types types with custom hasher
```javascript
var aaa = [{a:2, b:1},{a:1, b:2},{a:1, b:3},{a:1, b:4}];
var bbb = dedupe(aaa, function(value) { return value.a; });
console.log(bbb);

//result: [{a:2,b:1},{a:1,b:2}]
```