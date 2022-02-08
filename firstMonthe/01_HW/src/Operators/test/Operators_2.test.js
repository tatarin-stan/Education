const quarter = require('../Operators_2');

describe('Test SumAandB function', () => {

    test('Correct calculation test-1', () => {
        expect(quarter(12,15)).toEqual('точка принадлежит 1-й четверти ');
    })

    test('Correct calculation test-2', () => {
        expect(quarter(-12,15)).toEqual('точка принадлежит 2-й четверти ');
    })

    test('Correct calculation test-3', () => {
        expect(quarter(-12,-15)).toEqual('точка принадлежит 3-й четверти ');
    })

    test('Correct calculation test-4', () => {
        expect(quarter(12,-15)).toEqual('точка принадлежит 4-й четверти ');
    })

    test('test for wrong format1', () => {
        expect(quarter('12','15')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(quarter()).toEqual(false);
    })
})