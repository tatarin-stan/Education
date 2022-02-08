const dayOfWeek = require('../Function_1');

describe('Test dayOfWeek function', () => {

    test('Correct calculation test-1', () => {
        expect(dayOfWeek(1)).toEqual('Monday');
    })

    test('Correct calculation test-2', () => {
        expect(dayOfWeek(2)).toEqual('Tuesday');
    })

    test('Correct calculation test-3', () => {
        expect(dayOfWeek(3)).toEqual('Wednesday');
    })

    test('Incorrect calculation test', () => {
        expect(dayOfWeek(-12)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(dayOfWeek('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(dayOfWeek()).toEqual(false);
    })
})
