const addBtn = document.getElementById("book-add");
const bookForm = document.getElementById("bookForm");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "have read" : "not read yet";
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages,          
    ${this.read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBtn.addEventListener("click", () => {
  bookForm.style.display = "block";
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBookToLibrary(title, author, pages, read);
  bookForm.style.display = "none";
});
