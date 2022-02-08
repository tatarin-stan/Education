const getMinIndex = require('../Array_3');

describe('Test getMinIndex function', () => {

    test('Correct calculation test-1', () => {
        expect(getMinIndex([2, 5, 6, -7, -12, 16, 0, 3, -8, 9])).toEqual(4);
    })

    test('Correct calculation test-2', () => {
        expect(getMinIndex([2, 5, 6, -7, 19, 0, 3, -8, 9])).toEqual(7);
    })

    test('test for wrong format-1', () => {
        expect(getMinIndex([])).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(getMinIndex()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(getMinIndex('sdsd')).toEqual(false);
    })

})
