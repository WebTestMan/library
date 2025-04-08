const myLibrary = [];

function Book(title, author) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    title = title.ToUpper();
    const id = crypto.randomUUID();
    this.bookDetails = `${title} by ${author} - ${id}`;
};

function addBookToLibrary(title, author) {
    const newBook = new Book(title, author);
    myLibrary.push(newBook);
    displayLibraryBooks;
}

function displayLibraryBooks() {
    myLibrary.forEach(book => {
        console.log(book.bookDetails);
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'library-book');
        divElement.innerText = book.bookDetails;

        const libraryDisplay = document.querySelector('.library-display');
        libraryDisplay.appendChild(divElement);

    });
}

console.log('test');
addBookToLibrary('test title', 'test author');
console.log(myLibrary);
displayLibraryBooks();