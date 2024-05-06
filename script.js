const myLibrary = [];
let bookId = 0

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

function addBookToLibrary(author, title, pages, read) {
    
    myLibrary.push(new Book(author, title, pages, read, bookId))
    bookId += 1;
  
} 

function getBooks(array) {
    const container = document.querySelector(".main-container")
    for (let i = 0; i < array.length; i++) {
<<<<<<< HEAD

        const bookId = document.getElementById(`${i}`);
        if (document.body.contains(bookId)) {
            continue;
        }

        const tile = document.createElement("div")
=======
        const tile = document.createElement("div");
>>>>>>> 9219f68863d8f737befd4afa44e1098fd1854e45
        const author = document.createElement("p");
        const title = document.createElement("p");
        const pages = document.createElement("p");
        const readStatus = document.createElement("p");
<<<<<<< HEAD
        const deleteBook = document.createElement("button");
        deleteBook.textContent = "Delete Book";

        deleteBook.addEventListener("click", () => {
            console.log("Here");
        })
=======
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("id", i)
>>>>>>> 9219f68863d8f737befd4afa44e1098fd1854e45

        tile.setAttribute("id", `${i}`)
        
        author.textContent = `Author: ${array[i].author}\n`;
        title.textContent = `Title: ${array[i].author}`;
        pages.textContent = `Pages: ${array[i].pages}`;
        readStatus.textContent = `Status: ${array[i].read}`;

        container.appendChild(tile);
        tile.appendChild(author);
        tile.appendChild(title);
        tile.appendChild(pages);
        tile.appendChild(readStatus);
<<<<<<< HEAD
        tile.appendChild(deleteBook);
=======
        tile.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            console.log("I made it")
        })
>>>>>>> 9219f68863d8f737befd4afa44e1098fd1854e45

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

    const readLabel = document.createElement("label");
    readLabel.setAttribute("for", "read");
    readLabel.textContent = "Read";

    const read = document.createElement("input");
    read.setAttribute("type", "checkbox");
    read.setAttribute("name", "read");
    read.setAttribute("id", "read");

    const submitButton = document.createElement("input");
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    form.appendChild(authorLabel);
    authorLabel.appendChild(author);
    form.appendChild(titleLabel);
    titleLabel.appendChild(title);
    form.appendChild(pagesLabel);
    pagesLabel.appendChild(pages);
    form.appendChild(readLabel);
    readLabel.appendChild(read);
    form.appendChild(submitButton);
    container.appendChild(form);

    submitButton.addEventListener("click", event => {
        event.preventDefault();


        let author = document.getElementById("author").value;
        let title = document.getElementById("title").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").value;
        addBookToLibrary(author, title, pages, read, bookId)

        for(let i = 0; i < myLibrary.length; i++) {
            container.removeChild(i)
        }
        
        getBooks(myLibrary);

        container.removeChild(form);
    })
});

/* bookOne.incrementID();
console.log(bookOne);
console.log(bookTwo);
console.log(bookThree); */


