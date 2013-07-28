var expect = require('chai').expect;

var dedupe = require('../');

describe('dedupe', function() {

    it('should remove duplicates', function() {
        var a = [1,2,3,4,5,6];
        var b = dedupe(a);

        expect(b).to.deep.equal([1,2,3,4,5,6]);
    });

    it('should remove multiple duplicates', function() {
        var a = [1,2,3,3,3,3,3,3,3,3,3,3,4,5,6];
        var b = dedupe(a);

        expect(b).to.deep.equal([1,2,3,4,5,6]);
    });

    it('should remove multiple duplicates of multiple values', function() {
        var a = [1,2,3,3,3,3,3,3,3,3,3,3,4,5,6,1,1,1,1];
        var b = dedupe(a);

        expect(b).to.deep.equal([1,2,3,4,5,6]);
    });

    it('should remove duplicates of complex values', function() {
        var a = [{a:1}, {a:2}, {a:3}, {a:3}];
        var b = dedupe(a);

        expect(b).to.deep.equal([{a:1}, {a:2}, {a:3}]);
    });

    it('should remove duplicates of complex values when using a custom hasher', function() {
        var a = [{a:1, b:1}, {a:2, b:2}, {a:3, b:3}, {a:3, b:4}];
        var b = dedupe(a, function(value) { return value.a;});

        expect(b).to.deep.equal([{a:1, b:1}, {a:2, b:2}, {a:3, b:3}]);
    });
});