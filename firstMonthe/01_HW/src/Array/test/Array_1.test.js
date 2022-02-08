const getMinElement = require('../Array_1');

describe('Test getMinElement function', () => {

    test('Correct calculation test-1', () => {
        expect(getMinElement([2, 5, 6, -7, -12, 15, 0, 3, -8, 9])).toEqual(-12);
    })

    test('Correct calculation test-2', () => {
        expect(getMinElement([2, 5, 6, -7, 15, 0, 3, -8, 9])).toEqual(-8);
    })

    test('test for wrong format-1', () => {
        expect(getMinElement([])).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(getMinElement()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(getMinElement('sdsd')).toEqual(false);
    })

})
