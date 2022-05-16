
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

//yeah, yknow what, i'm over this whole "goofy variable
//names to remind myself the keys and items and
//parameters are different things" deal, gonna
//use normal variables now

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
  if(library.shelves[genre][i].title === book) {
library.shelves[genre].splice([i], 1);
  return `You have now checked out ${book} from the ${library.name}`
} else {
//library.shelves[genre].splice([i], 1);

    }
  }
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}

//g.i.o.s.
//goal
//inputs to functions
//outputs
//setup

//dot notation finds properties, typing genre with
//dot notation would look for the key genre which is not
//there

//genre evaluates to a string

//no dot needed between shelves and genre
//genre in bracket notation because it's referring
//to an array
// go to the library, go to the shelves, iterate
// over genre, then title

//if library.shelves[genre].includes(title) {
//  return library.shelves[book.genre].(book);
  //}
//}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
