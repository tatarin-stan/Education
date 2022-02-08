const  getQuantityPostsByAuthor  = require('../getQuntityPostsByAuthor');

describe('Test getQuantityPostsByAuthor function', () => {

    test('get quantity posts by author', () => {
        expect(getQuantityPostsByAuthor(listOfPosts2,'Rimus')).toEqual('Post: 1, comments: 3')
    })
})