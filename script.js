const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
}

function getBooks() {
    for (const book of myLibrary) {
        alert(book.title);
    }
}

const bookOne = new Book(
    "Michael Punke",
    "The Revenant",
    272,
    false,
);

const bookTwo = new Book(
    "Cormac McCarthy",
    "Blood Meridian",
    353,
    false,
);

const bookThree = new Book(
    "George Orwell",
    "Animal Farm",
    108,
    true
);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

getBooks();