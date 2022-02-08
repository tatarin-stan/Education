const grade = require('../Operators_5');

describe('Test grade function', () => {

    test('Correct calculation test-1', () => {
        expect(grade(55)).toEqual('ur score: D');
    })

    test('Correct calculation test-2', () => {
        expect(grade(20)).toEqual('ur score: E');
    })

    test('Incorrect calculation test', () => {
        expect(grade(-12)).toEqual(false);
    })

    test('test for wrong format-1', () => {
        expect(grade('12')).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(grade()).toEqual(false);
    })
})