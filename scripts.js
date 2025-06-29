const book1 = {};
const book2 = {};

book1.title = "A game of thrones";
book1.author = "George RR Martin";
book1.read = false;

book2.title = "A storm of swords";
book2.author = "George RR Martin";
book2.read = false;

const bookArr = [book1, book2];

class Book{
    constructor(title, author, isRead) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
}

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const book = new Book(title, author, false);
    bookArr.push(book);
    renderBooks();
    console.log(bookArr);
}

function isRead(index) {
    bookArr[index].read = !bookArr[index].read;
    renderBooks();
}

function deleteBook(index) {
  bookArr.splice(index, 1); 
  renderBooks();
}

function renderBooks() {
  const container = document.getElementById("bookList");
  container.innerHTML = ""; // Clear previous entries

  bookArr.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookItem");

    bookDiv.innerHTML = `
      <strong>${book.title}</strong><br>
      Author: ${book.author}<br>
      Read: ${book.read ? "Yes" : "No"}
      <button onclick="isRead(${index})" class="toggle-btn">TOGGLE READ</button><br>
      <button onclick="deleteBook(${index})" class="delete-btn">DELETE</button>
    `;
    container.appendChild(bookDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderBooks);