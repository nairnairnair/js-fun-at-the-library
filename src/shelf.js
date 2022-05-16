function shelfBook(book, shelf) {
  if (shelf.length < 3 ) {
  shelf.unshift(book)
  //console.log(shelf)
  }
};

//console.log() the parameters first to see what they want!!!!!

function unshelfBook(booque, shelph) {
  for (var i = 0; i < shelph.length ; i++) {
    if (shelph[i].title === booque) {
      shelph.splice(i, 1)
      //(start position, deleteCount)
    }
  }
}

//***EMMA NAMING CONVENTION EXPLANATION***

//I LIKE TO NAME PARAMETERS MISSPELLINGS OF THE WORDS I WOULD
//USUALLY USE TO REMIND ME THE NAMES CORRESPOND TO NOTHING

function listTitles(phantasyShelf) {
  var titles = []
for (var i = 0; i < phantasyShelf.length; i++) {
  titles.push(phantasyShelf[i].title)
}

  return titles.join(', ')
  //this thing is so picky!!

  //return titles.replace(",", ", ")
  //returns array elements as a string
//console.log(phantasyShelf)
//what array proto can turn elements into a string
}
// positive increments because we're running thru the whole shelf

function searchShelf(shielf, booq) {
  var onShielf = false
    for (var i = 0; i < shielf.length; i++) {
if (shielf[i].title === booq) {
onShielf = true
    }
console.log(onShielf)
  }
    return onShielf
}

// we want a string corresponding to title
// we want a boolean corresponding to shelf

//i hate this one so much dude

//(shielf.includes(booq[i].title))??

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
