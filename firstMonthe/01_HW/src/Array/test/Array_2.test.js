const getMaxElement = require('../Array_2');

describe('Test getMaxElement function', () => {

    test('Correct calculation test-1', () => {
        expect(getMaxElement([2, 5, 6, -7, -12, 16, 0, 3, -8, 9])).toEqual(16);
    })

    test('Correct calculation test-2', () => {
        expect(getMaxElement([2, 5, 6, -7, 19, 0, 3, -8, 9])).toEqual(19);
    })

    test('test for wrong format-1', () => {
        expect(getMaxElement([])).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(getMaxElement()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(getMaxElement('sdsd')).toEqual(false);
    })

})
