const strToNumb = require('../Function_3');

describe('Test strToNumb function', () => {

    test('Correct calculation test-1', () => {
        expect(strToNumb('sixhundred thirty nine')).toEqual(639);
    })

    test('Correct calculation test-2', () => {
        expect(strToNumb('nine')).toEqual(9);
    })

    test('Incorrect calculation test-1', () => {
        expect(strToNumb('sixhundred thirty nine six')).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(strToNumb(12)).toEqual(false);
    })

    test('void test', () => {
        expect(strToNumb('')).toEqual(false);
    })
})