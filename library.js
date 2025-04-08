let myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibraryBooks();
}

function displayLibraryBooks() {
    const libraryDisplay = document.querySelector('.library-display');
    libraryDisplay.innerHTML = '';

    myLibrary.forEach(book => {
        const elementArray = [];
        console.log(book.bookDetails);
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'library-book');
        divElement.setAttribute('id', book.id);

        const bookTitle = document.createElement('h4');
        bookTitle.innerText = `Title: ${book.title}`;
        elementArray.push(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.innerText = `By ${book.author}`;
        elementArray.push(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.innerText = `Pages: ${book.bookPages}`;
        elementArray.push(bookPages);

        const bookRead = document.createElement('p');
        bookRead.innerText = `Book has been read: ${book.read}`;
        elementArray.push(bookRead);

        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', `remove-button-${book.id}`);
        removeButton.innerText = "Remove book?";
        removeButton.addEventListener("click", () => {
            removeBookFromLibrary(book.id);
        });
        elementArray.push(removeButton);

        elementArray.forEach(element => {
            divElement.appendChild(element);
        })

        libraryDisplay.appendChild(divElement);
    });
}

const form = document.getElementById('new-book-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read;
    if (document.getElementById('yesRead').checked) {
        read = 'yes'
    } else {
        read = 'no'
    }

    addBookToLibrary(title, author, pages, read);
    form.reset();
});

function removeBookFromLibrary(id) {
    myLibrary = myLibrary.filter((book) => book.id !== id);
    displayLibraryBooks();
}

