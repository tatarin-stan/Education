const writeNumb = require('../Function_2');

describe('Test writeNumb function', () => {

    test('Correct calculation test-1', () => {
        expect(writeNumb(456)).toEqual('Four Hundred fifty Six - 456');
    })

    test('Correct calculation test-2', () => {
        expect(writeNumb(128)).toEqual('One Hundred twenty Eight - 128');
    })

    test('Incorrect calculation test-1', () => {
        expect(writeNumb(1000)).toEqual(false);
    })

    test('Incorrect calculation test-2', () => {
        expect(writeNumb(-12)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(writeNumb('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(writeNumb()).toEqual(false);
    })
})
