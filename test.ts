import dedupe from './index'

describe('dedupe', () => {
    it('should remove duplicates', () => {
        let deduped = dedupe([1, 1, 2, 3, 4, 5, 6])

        expect(deduped).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should remove multiple duplicates', () => {
        let deduped = dedupe([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6])

        expect(deduped).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should remove multiple duplicates of multiple values', () => {
        let deduepd = dedupe([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 1, 1, 1, 1])

        expect(deduepd).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should remove duplicates of complex values', () => {
        let deduped = dedupe([{a: 1}, {a: 2}, {a: 3}, {a: 3}])

        expect(deduped).toEqual([{a: 1}, {a: 2}, {a: 3}])
    })

    it('should remove duplicates of complex values when using a custom hasher', () => {
        let deduped = dedupe([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}, {a: 3, b: 4}], value => value.a.toString())

        expect(deduped).toEqual([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}])
    })

    it('should remove date duplicates', () => {
        let myDate = new Date(2017, 0, 1)
        let deduped = dedupe([myDate, myDate, myDate])

        expect(deduped).toEqual([myDate])
    })

    it('should remove date duplicates inside a complex object', () => {
        let myDate = new Date(2017, 0, 1)
        let deduped = dedupe([{date: myDate}, {date: myDate}, {date: myDate}])

        expect(deduped).toEqual([{date: myDate}])
    })
})