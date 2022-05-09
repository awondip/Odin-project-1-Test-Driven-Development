const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
      ,
      {
        title: 'book3',
        author: 'Name3'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2','book3']);
  });
});
