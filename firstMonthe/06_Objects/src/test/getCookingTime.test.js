const getCookingTime = require('../getCookingTime');

describe('Test getCookingTime function', () => {

    test('Correct calculation test', () => {
        expect(getCookingTime(12)).toEqual('15 minutes');
    })

    test('Test for incorrect calculation', () => {
        expect(getCookingTime(0)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(getCookingTime('124')).toEqual(false);
    })

    test('Test for emptiness ', () => {
        expect(getCookingTime()).toEqual(false);
    })
})