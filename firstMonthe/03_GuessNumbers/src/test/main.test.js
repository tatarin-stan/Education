const {maxValidation, tryValidation} = require('../main')

describe('Test maxValidation function', () => {

    test('Correct calculation test', () => {
        expect(maxValidation(11)).toEqual(true);
    })

    test('test for wrong format-1', () => {
        expect(maxValidation(0)).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(maxValidation('')).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(maxValidation('sdsd')).toEqual(false);
    })

    test('test for wrong format-4', () => {
        expect(maxValidation(1.25)).toEqual(false);
    })

})


describe('Test tryValidation function', () => {

    test('Correct calculation test', () => {
        expect(tryValidation(14)).toEqual(true);
    })

    test('test for wrong format-1', () => {
        expect(tryValidation(16)).toEqual(false);
    })

    test('test for wrong format-2', () => {
        expect(tryValidation(0)).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(tryValidation(1.25)).toEqual(false);
    })

    test('test for wrong format-4', () => {
        expect(tryValidation('sdsd')).toEqual(false);
    })

    test('test for wrong format-5', () => {
        expect(tryValidation('')).toEqual(false);
    })
})