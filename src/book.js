function createTitle(title) {
  return("The " + title)
}
createTitle()

function buildMainCharacter(name, age, pronouns) {
  var mc = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
return(mc)
}

function saveReview(review , reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review)
  }
  return reviews
}
console.log(saveReview)

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

//add bookPageCount as second parameter?

//for loop? or string.length <- preferably

function writeBook(bookTitle, mainCharacter, genre) {
  var bookObject = {
    title: bookTitle,
    //^must match the value in the function it's using
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    //^this is itself a parameter
    genre: genre,
    }
    return bookObject
  }

//var pageReduce = [calculatePageCount(bookTitle)]
//var initialValue = calculatePageCount(bookTitle);
//var

//attempt #2
//function editBook(bookTitle) {
  //var pageReduce = {
  //pageCount: calculatePageCount(bookTitle) }
  //return pageReduce

  //var multiply = (calculatePageCount(bookTitle), .75) => {
    //return calculatePageCount(bookTitle) * .75
  //};

//}

//attempt #1
//function editBook(bookTitle) {
//  var pageReduce = {
  //pageCount: calculatePageCount(bookTitle) * 0.75}
  //pageReduce = *= 0.75;
//  return pageReduce
//}

//attempt #1
function editBook(bookObject) {
 //bookObject.pageCount * 0.75;
 bookObject.pageCount = bookObject.pageCount * 0.75;
  return bookObject
}

//var pageReduce = {
//pageCount:
//calculatePageCount(bookTitle)
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
