const sumDigits = require('../Cycle_5');

describe('Test sumDigits function', () => {

    test('Correct calculation test-1', () => {
        expect(sumDigits(10)).toEqual(1);
    })

    test('Correct calculation test-2', () => {
        expect(sumDigits(12)).toEqual(3);
    })

    test('test for wrong format1', () => {
        expect(sumDigits('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(sumDigits()).toEqual(false);
    })
})