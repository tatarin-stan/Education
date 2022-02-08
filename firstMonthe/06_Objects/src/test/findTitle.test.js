const { findTitle } = require('../findTitle');

describe('Test findTitle function', () => {

    const arr = [
        {title: 'Some title1'},
        {title: 'I like JS'},
        {user: 'This obj doesnt have key title js'},
        {title: 'Js - is the best!'}
    ];

    test('Correct calculation test', () => {
        expect(findTitle(arr, 'JS')).toEqual([ { title: 'I like JS' }, { title: 'Js - is the best!' } ]);
    })


    test('test for wrong format1', () => {
        expect(findTitle(arr, 124)).toEqual(false);
    })

    test('Test for emptiness ', () => {
        expect(findTitle()).toEqual(false);
    })
})