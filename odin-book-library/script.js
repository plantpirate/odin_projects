const addBtn = document.getElementById("book-add");
const bookForm = document.getElementById("bookForm");
const readShelf = document.getElementById("read-shelf");
const unreadShelf = document.getElementById("unread-shelf");

const myLibrary = [];

function Book(title, author, pages, read) {
  // takes in arguments to create key value pairs
  this.title = title;
  this.author = author;
  this.pages = pages;
  // stores certain valiue based on have read being checked or not
  this.read = read ? "have read" : "not read yet";
}

function addBookToLibrary(title, author, pages, read) {
  // uses arguments passed in to then create new Book object
  const newBook = new Book(title, author, pages, read);
  // push newly created book into library
  myLibrary.push(newBook);
  // runs displayLibrary function
  displayLibrary();
}

function displayLibrary() {
  // clear shlves so no duplicates
  readShelf.innerHTML = "";
  unreadShelf.innerHTML = "";
  // loops through library and runs displayBook func on each book in array
  myLibrary.forEach((book) => displayBook(book));
}

addBtn.addEventListener("click", () => {
  // displays form
  bookForm.style.display = "block";
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // makes const variable from values enetered in form inputs
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  // runs addBookToLibrary func with form values as arguments
  addBookToLibrary(title, author, pages, read);
  // hides form upon submission and clears inputs
  bookForm.style.display = "none";
  bookForm.reset();
});

function displayBook(book) {
  // create card and add class of book
  const card = document.createElement("div");
  card.classList.add("book");
  // add inner html to card with tempklate literals values for tdisplay words
  card.innerHTML = ` 
            <div class="delete-container">
              <i class="fa-solid fa-circle-xmark delete"></i>
            </div>
            <h3 class="title">${book.title}</h3>
            <h4 class="author">${book.author}</h4>
            <p class="pages">${book.pages} pages</p>
            <p class="status">${book.read}</p>
            <button class="change-status">Change Status</button>
    `;
  // conditionals to place books based on have read check value
  if (book.read === "have read") {
    readShelf.appendChild(card);
  } else {
    unreadShelf.appendChild(card);
  }
  const deleteBtn = card.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    removeBookFromLibrary(book.title);
  });
}

function removeBookFromLibrary(title) {
  // find the index of the book based on the title
  const bookIndex = myLibrary.findIndex((book) => book.title === title);
  // Remove the book from the myLibrary array
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
  }
  // Refresh the display
  displayLibrary();
}
