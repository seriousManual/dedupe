var expect = require('chai').expect

var dedupe = require('./')

describe('dedupe', () => {
    it('should remove duplicates', () => {
        var a = [1, 2, 3, 4, 5, 6]
        var b = dedupe(a)

        expect(b).to.deep.equal([1, 2, 3, 4, 5, 6])
    })

    it('should remove multiple duplicates', () => {
        var a = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6]
        var b = dedupe(a)

        expect(b).to.deep.equal([1, 2, 3, 4, 5, 6])
    })

    it('should remove multiple duplicates of multiple values', () => {
        var a = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 1, 1, 1, 1]
        var b = dedupe(a)

        expect(b).to.deep.equal([1, 2, 3, 4, 5, 6])
    })

    it('should remove duplicates of complex values', () => {
        var a = [{a: 1}, {a: 2}, {a: 3}, {a: 3}]
        var b = dedupe(a)

        expect(b).to.deep.equal([{a: 1}, {a: 2}, {a: 3}])
    })

    it('should remove duplicates of complex values when using a custom hasher', () => {
        var a = [{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}, {a: 3, b: 4}]
        var b = dedupe(a, value => value.a)

        expect(b).to.deep.equal([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}])
    })
})