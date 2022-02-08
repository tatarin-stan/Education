const getSum = require('../getSum');

describe('Test getSum function', () => {

    test('pure test', () => {
        expect(getSum('123', '324')).toEqual('447');
    })

    test('Test for BigInt', () => {
        expect(getSum('111111111111111111111111111111111111111111111111111', '233333333333333333333333333333333333333333333333333')).toEqual('344444444444444444444444444444444444444444444444444');
    })

    test('test for wrong format1', () => {
        expect(getSum(124)).toEqual('enter string value ');
    })

    test('test for an emptiness', () => {
        expect(getSum('', '')).toEqual('enter  value ');
    })

})