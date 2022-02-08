const getNumber = require('../getNumber');

describe('Test getNumber function', () => {

    test('Correct calculation test', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 14])).toEqual([13]);
    })

    test('Correct calculation test-2', () => {
        expect(getNumber([113, 5, 7, 9, 15, 19, 777, -15, -11,4, 9, 23, -17])).toEqual([4]);
    })

    test('Test for incorrect calculation', () => {
        expect(getNumber([])).toEqual(false);
    })

    test('Test for emptiness ', () => {
        expect(getNumber()).toEqual(false);
    })
})