const mirrorEffect = require('../Cycle_6');

describe('Test sqrt function', () => {

    test('Correct calculation test', () => {
        expect(mirrorEffect(152)).toEqual('251');
    })

    test('Correct calculation test-2', () => {
        expect(mirrorEffect(125)).toEqual('521');
    })

    test('test for wrong format1', () => {
        expect(mirrorEffect('12')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(mirrorEffect()).toEqual(false);
    })

    test('test for wrong format-3', () => {
        expect(mirrorEffect(-152)).toEqual(false);
    })
})