const sqrt = require('../Cycle_3');

describe('Test sqrt function', () => {

    test('Correct calculation test', () => {
        expect(sqrt(9)).toEqual(3);
    })

    test('Correct calculation test-2', () => {
        expect(sqrt(12)).toEqual('this number has no integer root');
    })

    test('Incorrect calculation test-2', () => {
        expect(sqrt(-12)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(sqrt('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(sqrt()).toEqual(false);
    })
})
