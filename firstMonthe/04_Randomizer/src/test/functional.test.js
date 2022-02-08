const {validation} = require('../functional');

describe('Test validation function', () => {

    test('Correct calculation test-1', () => {
        expect(validation(12, 15)).toEqual(true);
    })

    test('test for wrong format-1', () => {
        expect(validation(15,12)).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(validation()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(validation('sd','sd')).toEqual(false);
    })
    test('test for wrong format-4', () => {
        expect(validation(0,0)).toEqual(false);
    })

})