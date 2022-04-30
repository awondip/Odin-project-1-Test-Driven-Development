const getTheTitles = function() {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
     
        }
      ]


    return books.map(books => books.title);  
    



     

};
console.log(getTheTitles())

// Do not edit below this line
module.exports = getTheTitles;
