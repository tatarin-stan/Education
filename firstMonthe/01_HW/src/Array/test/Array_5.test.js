const getSumOddIndex = require('../Array_5');

describe('Test getSumOddIndex function', () => {

    test('Correct calculation test-1', () => {
        expect(getSumOddIndex([1, 2, 1, 2, 1, 2, 1, 2, 1, 2])).toEqual(10);
    })

    test('Correct calculation test-2', () => {
        expect(getSumOddIndex([1, 4, 1, 2, 1, 2, 1, 2, 1, 2])).toEqual(12);
    })

    test('test for wrong format-1', () => {
        expect(getSumOddIndex([])).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(getSumOddIndex()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(getSumOddIndex('sdsd')).toEqual(false);
    })

})
