const sumOddElement = require('../Array_7');

describe('Test sumOddElement function', () => {

    test('Correct calculation test-1', () => {
        expect(sumOddElement([1, 2, 1, 2, 1, 2, 1, 2, 1, 2])).toEqual(5);
    })

    test('test for wrong format-1', () => {
        expect(sumOddElement([])).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(sumOddElement()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(sumOddElement('sdsd')).toEqual(false);
    })

})
