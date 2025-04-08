const myLibrary = [];

function Book(title, author, pages) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    const id = crypto.randomUUID();
};

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    displayLibraryBooks();
}

function displayLibraryBooks() {
    myLibrary.forEach(book => {
        console.log(book.bookDetails);
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'library-book');

        const bookTitle = document.createElement('h4');
        bookTitle.innerText = `Title: ${book.title}`;

        const bookAuthor = document.createElement('p');
        bookAuthor.innerText = `By ${book.author}`;

        const bookPages = document.createElement('p');
        bookPages.innerText = `Pages: ${book.bookPages}`;

        divElement.appendChild(bookTitle);
        divElement.appendChild(bookAuthor);
        divElement.appendChild(bookPages);

        const libraryDisplay = document.querySelector('.library-display');
        libraryDisplay.appendChild(divElement);

    });
}

const form = document.getElementById('new-book-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    // const read = document.getElementById('been_read').checked;

    addBookToLibrary(title, author, pages);
    form.reset();
});