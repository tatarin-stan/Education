const tickets = require('../tickets');

describe('Test tickets function', () => {

    test('Correct calculation test', () => {
        expect(tickets([25, 25, 50])).toEqual('Yes');
    })

    test('Test for incorrect calculation', () => {
        expect(tickets([25, 100])).toEqual('No');
    })

    test('test for wrong format1', () => {
        expect(tickets('ssdsd')).toEqual('nope');
    })

    test('test for an empty object', () => {
        expect(tickets([])).toEqual('nope');
    })

    test('test for wrong format2', () => {
        expect(tickets(2312)).toEqual('nope');
    })

    test('Test for emptiness ', () => {
        expect(tickets()).toEqual('nope');
    })
})