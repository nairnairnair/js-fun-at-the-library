
//function createLibrary(library) {
//var braries = {};
//library.name === braries;
//braries.push(library.name);

//library.shelves === bookShelf

//return braries
//}

//for (var i = 0; i < bookHouse[i].length; i++)
//library.push(bookHouse[i].name);
//library.push(bookHouse[i].shelves);

function createLibrary(libby){
  var shelfs = {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  };
  var library = {
    name: libby,
    shelves: shelfs
  };
  return library
};

//only one parameter needed



function addBook(library, book) {
return library.shelves[book.genre].push(book);
}

//it wants output:
//library = denverLibrary.shelves.fantasy[0]
//book = var dracula
//...or does it?

//if (book.genre === "fantasy") {
//denverLibrary.shelves.fantasy


//if booq.genre = (denverLibrary.shelfs.fantasy) {
  //shelfs.fantasy.unshift(booq)
//} console.log(booq)
//return booq
//}

function checkoutBook(library, book, genre) {
for (var i = 0; i < genre.length; i++) {
  if (book.genre === book)

} return
}


//if library.shelves[genre].includes(title) {
//  return library.shelves[book.genre].(book);
  //}
//}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
