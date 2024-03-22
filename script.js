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
        const tile = document.createElement("div")
        const author = document.createElement("p");
        const title = document.createElement("p");
        const pages = document.createElement("p");
        const readStatus = document.createElement("p");

        tile.setAttribute("id", `${i}`)
        
        author.textContent = `Author: ${array[i].author}\n`
        title.textContent = `Title: ${array[i].author}`
        pages.textContent = `Pages: ${array[i].pages}`
        readStatus.textContent = `Status: ${array[i].readStatus}`

        container.appendChild(tile)
        tile.appendChild(author)
        tile.appendChild(title)
        tile.appendChild(pages)
        tile.appendChild(readStatus)

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