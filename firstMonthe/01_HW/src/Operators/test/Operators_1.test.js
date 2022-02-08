const SumAandB = require('../Operators_1');

describe('Test SumAandB function', () => {

    test('Correct calculation test', () => {
        expect(SumAandB(11,15)).toEqual(26);
    })

    test('Incorrect calculation test-2', () => {
        expect(SumAandB(-12)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(SumAandB('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(SumAandB()).toEqual(false);
    })
})