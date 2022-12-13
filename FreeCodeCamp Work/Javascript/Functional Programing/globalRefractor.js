// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let book = [...arr];
  book.push(bookName);
  console.log(bookList)
  return book;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    const book = [...arr];
    book.splice(book_index, 1);
    return book;

    // Change code above this line
    }
}

add(bookList, "A Brief History of Time");