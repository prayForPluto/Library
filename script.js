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

    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.textContent = "Author";

    const author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("name", "Author");
    author.setAttribute("id", "author");
    author.setAttribute("placeholder", "Charles Dickens");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "Title");
    title.setAttribute("id", "title");
    title.setAttribute("placeholder", "Rye With Cheese");

    const pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.textContent = "Pages";

    const pages = document.createElement("input");
    pages.setAttribute("type", "text");
    pages.setAttribute("name", "Pages");
    pages.setAttribute("id", "pages");
    pages.setAttribute("placeHolder", "234");

    const read = 0;

    const remove = 0;

    const submitButton = document.createElement("input");
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    form.appendChild(authorLabel);
    form.appendChild(author);
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(pagesLabel);
    form.appendChild(pages);
    form.appendChild(submitButton);
    container.appendChild(form);

    submitButton.addEventListener("click", event => {
        event.preventDefault();
        container.removeChild(form);
    })
});

/* bookOne.incrementID();
console.log(bookOne);
console.log(bookTwo);
console.log(bookThree); */