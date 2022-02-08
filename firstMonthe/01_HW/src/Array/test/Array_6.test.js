const reverse = require('../Array_6');

describe('Test reverse function', () => {

    test('Correct calculation test-1', () => {
        expect(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([ undefined, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]);
    })

    test('test for wrong format-1', () => {
        expect(reverse([])).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(reverse()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(reverse('sdsd')).toEqual(false);
    })

})
