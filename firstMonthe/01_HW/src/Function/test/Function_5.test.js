const NumInWords = require('../Function_5');

describe('Test NumInWords function', () => {


    test('Correct calculation test-1', () => {
        expect(NumInWords(3334)).toEqual('three thousand three hunderd thirty-four  ');
    })

    test('Correct calculation test-2', () => {
        expect(NumInWords(564)).toEqual('five hunderd sixty-four  ');
    })

    test('Correct calculation test-3', () => {
        expect(NumInWords(4567474)).toEqual('four million five hunderd sixty-seven thousand four hunderd seventy-four  ');
    })

    test('Incorrect calculation test-1', () => {
        expect(NumInWords(-12)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(NumInWords('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(NumInWords()).toEqual(false);
    })
})
