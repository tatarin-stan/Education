const factNmbr = require('../Cycle_4');

describe('Test factNmbr function', () => {

    test('Correct calculation test', () => {
        expect(factNmbr(10)).toEqual('10 = 3628800');
    })

    test('Incorrect calculation test-2', () => {
        expect(factNmbr(-12)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(factNmbr('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(factNmbr()).toEqual(false);
    })
})