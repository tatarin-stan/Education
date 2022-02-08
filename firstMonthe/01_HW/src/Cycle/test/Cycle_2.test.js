const simpleNmbr = require('../Cycle_2');

describe('Test sqrt function', () => {

    test('Correct calculation test', () => {
        expect(simpleNmbr(9)).toEqual('9 naturale');
    })

    test('Correct calculation test-2', () => {
        expect(simpleNmbr(12)).toEqual('12 note naturale');
    })

    test('Incorrect calculation test-2', () => {
        expect(simpleNmbr(-12)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(simpleNmbr('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(simpleNmbr()).toEqual(false);
    })
})