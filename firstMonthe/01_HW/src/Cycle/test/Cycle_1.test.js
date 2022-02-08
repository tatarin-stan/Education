const sumEveNmb = require('../Cycle_1');

describe('Test Cycle_1 function', () => {

    test('Correct calculation test', () => {
        expect(sumEveNmb()).toEqual(2450);
    })
})