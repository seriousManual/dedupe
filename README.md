# dedupe [![Build Status](https://travis-ci.org/seriousManual/dedupe.png)](https://travis-ci.org/seriousManual/dedupe)

removes duplicates from your array.

## Installation

````bash
npm install dedupe
````

## Usage

### primitive types

```javascript
import dedupe from 'dedupe'

const a = [1, 2, 2, 3]
const b = dedupe(a)
console.log(b)

//result: [1, 2, 3]
```

### complex types

Here the string representation of the object is used for comparism. Internal `JSON.stringify` is used for serialization.
That means that `{}` is considered equal to `{}`.

```javascript
import dedupe from 'dedupe'

const aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}]
const bb = dedupe(aa)
console.log(bb)

//result: [{a: 2}, {a: 1}]
```

### complex types types with custom hasher

You can use a custom hasher to overwrite the default behaviour.

```javascript
import dedupe from 'dedupe'

const aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}]
const bbb = dedupe(aaa, value => value.a)
console.log(bbb)

//result: [{a: 2, b: 1}, {a: 1,b: 2}]
```
