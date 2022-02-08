const getNextPalindrome = require('../getNextPalindrome');

describe('Test getNextPalindrome function', () => {

    test('Correct calculation test', () => {
        expect(getNextPalindrome(7)).toEqual('11');
    })

    test('Correct calculation test-2', () => {
        expect(getNextPalindrome(99)).toEqual('101');
    })

    test('Test for incorrect calculation', () => {
        expect(getNextPalindrome(-7)).toEqual('incorrect input');
    })

    test('test for wrong format1', () => {
        expect(getNextPalindrome('ssdsd')).toEqual('incorrect input');
    })

    test('Test for emptiness ', () => {
        expect(getNextPalindrome()).toEqual('incorrect input');
    })
})