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
        alert(book);
    }
}

displayBooks();