const halfRev = require('../Array_8');

describe('Test halfRev function', () => {

    test('Correct calculation test-1', () => {
        expect(halfRev([2, 5, 6, -7, -12, 16, 0, 3, -8, 9])).toEqual([
                16, 0, 3, -8,   9,
                2, 5, 6, -7, -12
            ]
        );
    })

    test('Correct calculation test-2', () => {
        expect(halfRev([8, 46, 6, 25, -12, 55, 0, 5, -8, 100])).toEqual([
            55,  0, 5, -8, 100,
            8, 46, 6, 25, -12
        ]  );
    })

    test('test for wrong format-1', () => {
        expect(halfRev([])).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(halfRev()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(halfRev('sdsd')).toEqual(false);
    })

})
