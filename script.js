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

function getBooks(array) {
    const container = document.querySelector(".main-container")
    for (let i = 0; i < array.length; i++) {
        const author = document.createElement("p");
        const title = document.createElement("p");
        const pages = document.createElement("p");
        div.setAttribute("id", `${i}`)
        div.textContent = `Author: ${array[i].author}\n`
        div.textContent = `Book: ${array[i].title}`
        divPages: ${array[i].pages}
        Read: ${array[i].read}
        // alert(array[i].author); */
        container.appendChild(div)
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

getBooks(myLibrary);