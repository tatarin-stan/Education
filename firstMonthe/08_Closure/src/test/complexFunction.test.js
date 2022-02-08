const cache = require('../complexFunction');

describe('Test cache function', () => {

    test('test for wrong format1', () => {
        expect(cache('sds')).toEqual(false);
    })

    test('Test for emptiness', () => {
        expect(cache('', '')).toEqual(false);
    })

    test('test for correct input', () => {
        expect(cache(9,9)).toEqual([
            { a: 5, b: 6 },
            { a: 1, b: 3 },
            { a: 2, b: 4 },
            { a: 4, b: 2 },
            { a: 3, b: 1 },
            { a: 9, b: 9 }
        ]);
    })

    test('test for incorrect input', () => {
        expect(cache(5,6)).toEqual([
                { a: 5, b: 6 },
                { a: 1, b: 3 },
                { a: 2, b: 4 },
                { a: 4, b: 2 },
                { a: 3, b: 1 },
                { a: 9, b: 9 }
            ]
        );
    })
})