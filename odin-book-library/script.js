const addBtn = document.getElementById("book-add");
const bookForm = document.getElementById("bookForm");
const readShelf = document.getElementById("read-shelf");
const unreadShelf = document.getElementById("unread-shelf");

// const deleteBtn = document.getElementById("delete");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "have read" : "not read yet";
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
}

function displayLibrary() {
  readShelf.innerHTML = "";
  unreadShelf.innerHTML = "";
  myLibrary.forEach((book) => displayBook(book));
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
  bookForm.reset();
});

function displayBook(book) {
  const card = document.createElement("div");
  card.classList.add("book");
  card.innerHTML = ` 
            <div class="delete-container">
              <i class="fa-solid fa-circle-xmark" id="delete"></i>
            </div>
            <h3 class="title">${book.title}</h3>
            <h4 class="author">${book.author}</h4>
            <p class="pages">${book.pages} pages</p>
            <p class="status">${book.read}</p>
            <button class="change-status">Change Status</button>
    `;
  if (book.read === "have read") {
    readShelf.appendChild(card);
  } else {
    unreadShelf.appendChild(card);
  }
}
