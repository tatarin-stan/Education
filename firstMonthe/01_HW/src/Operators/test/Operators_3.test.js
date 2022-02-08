const positiveOfThree = require('../Operators_3');

describe('Test SumAandB function', () => {

    test('Correct calculation test', () => {
        expect(positiveOfThree(12,10,-10)).toEqual(22);
    })

    test('test for wrong format1', () => {
        expect(positiveOfThree('12','10','-10')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(positiveOfThree()).toEqual(false);
    })
})