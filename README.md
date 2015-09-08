# dedupe [![Build Status](https://travis-ci.org/seriousManual/dedupe.png)](https://travis-ci.org/seriousManual/dedupe)

[![NPM](https://nodei.co/npm/dedupe.png)](https://nodei.co/npm/dedupe/)

[![NPM](https://nodei.co/npm-dl/dedupe.png?months=3)](https://nodei.co/npm/dedupe/)

removes duplicates from your array.

## Installation

````bash
$ npm install dedupe
````

## Usage

### primitive types
```javascript
var dedupe = require('dedupe');

var a = [1, 2, 2, 3];
var b = dedupe(a);
console.log(b);

//result: [1, 2, 3];
```

### complex types
```javascript
var dedupe = require('dedupe');

var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}];
var bb = dedupe(aa);
console.log(bb);

//result: [{a: 2}, {a: 1}]
```

### complex types types with custom hasher
```javascript
var dedupe = require('dedupe');

var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
var bbb = dedupe(aaa, function (value) { return value.a; });
console.log(bbb);

//result: [{a: 2, b: 1}, {a: 1,b: 2}]
```
