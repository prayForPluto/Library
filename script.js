const myLibrary = [];

function Book(author, title, pages, read, bookID) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.bookId = bookID;

    function getBookId() {
        return this.bookId;
    }
}

function addBookToLibrary() {
    let bookID = 0;

    const author = prompt("Who is the author of the book?")
    const title = prompt("What is the title of the book?")
    const pages = prompt("How many pages does the book have?")
    const read = prompt("Has the book been read?")
    myLibrary.push(new Book(author, title, pages, read, bookID))

    
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
        readStatus.textContent = `Status: ${array[i].read}`

        container.appendChild(tile)
        tile.appendChild(author)
        tile.appendChild(title)
        tile.appendChild(pages)
        tile.appendChild(readStatus)

    }
}

/*const bookOne = new Book(
    "Michael Punke",
    "The Revenant",
    272,
    "yes",
);

const bookTwo = new Book(
    "Cormac McCarthy",
    "Blood Meridian",
    353,
    "no",
);

const bookThree = new Book(
    "George Orwell",
    "Animal Farm",
    108,
    "no",
); */

const container = document.querySelector(".main-container")

const bookButton = document.createElement("button")
bookButton.textContent = "Add New Book";

container.appendChild(bookButton);



bookButton.addEventListener("click", function bookForm() {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    const author = document.createElement("input")
    form.setAttribute("type", "text")
    form.setAttribute("name", "Author");
    form.setAttribute("placeholder", "Charles Dickens")

    const title = document.createElement("input")
    form.setAttribute("type", "text")
    form.setAttribute("name", "Title");
    form.setAttribute("placeholder", "Rye With Cheese")

    const pages = 0;

    const read = 0;

    const remove = 0;

    const submitButton = document.createElement("input");
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    form.appendChild(author)
    form.appendChild(title);
    form.appendChild(submitButton);
    container.appendChild(form);

    submitButton.addEventListener("click", event => {
        event.preventDefault();
        closeMe();
    })
});

/* bookOne.incrementID();
console.log(bookOne);
console.log(bookTwo);
console.log(bookThree); */