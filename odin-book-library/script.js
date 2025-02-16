const addBtn = document.getElementById("book-add");
const bookForm = document.getElementById("bookForm");
const readShelf = document.getElementById("read-shelf");
const deleteBtn = document.getElementById("delete");
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

deleteBtn.addEventListener("click", (e) => {
  e.target.closest(".book").remove();
});

function displayLibrary() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book");
    card.innerHTML = ` 
            <div class="delete-container">
              <i class="fa-solid fa-circle-xmark" id="delete"></i>
            </div>
            <h3 id="title">${this.title}</h3>
            <h4 id="author">${this.author}</h4>
            <p id="pages">${this.pages} pages</p>
            <p id="status">${this.read}</p>
            <button class="change-status">Change Status</button>
    `;
  });
}
