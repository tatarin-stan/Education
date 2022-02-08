const Max = require('../Operators_4');

describe('Test Max function', () => {

    test('Correct calculation test', () => {
        expect(Max(10,10,10)).toEqual(1003);
    })

    test('Correct calculation test', () => {
        expect(Max(-10,10,10)).toEqual(13);
    })

    test('test for wrong format1', () => {
        expect(Max('12','10','15')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(Max()).toEqual(false);
    })
})