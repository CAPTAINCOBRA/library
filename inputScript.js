// Bug 25 - 01/02/2022 - Added Search to the all books page.

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const bookTitle = document.querySelectorAll(".book-title");

  const bookStyles = [];

  bookTitle.forEach((book) => {
    const title = book.textContent.toLowerCase();
    if (title.indexOf(value) != -1) {
      book.parentElement.parentElement.parentElement.style.display = "flex";
      bookStyles.push(
        book.parentElement.parentElement.parentElement.style.display
      );
    } else {
      book.parentElement.parentElement.parentElement.style.display = "none";
      bookStyles.push(
        book.parentElement.parentElement.parentElement.style.display
      );
    }

    if (bookTitle[bookTitle.length - 1] == book) {
      console.log(bookStyles);
      if (bookStyles.includes("flex")) {
        document.querySelector(".no-result-found").style.display = "none";
      } else {
        document.querySelector(".no-result-found").style.display = "flex";
      }
    }
  });
});

const searchInputByAuthor = document.querySelector("[author-search]");

searchInputByAuthor.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const bookAuthor = document.querySelectorAll(".book-author");

  const bookStyles = [];

  bookAuthor.forEach((book) => {
    const author = book.textContent.toLowerCase();
    if (author.indexOf(value) != -1) {
      book.parentElement.parentElement.parentElement.style.display = "flex";
      bookStyles.push(
        book.parentElement.parentElement.parentElement.style.display
      );
    } else {
      book.parentElement.parentElement.parentElement.style.display = "none";
      bookStyles.push(
        book.parentElement.parentElement.parentElement.style.display
      );
    }

    if (bookAuthor[bookAuthor.length - 1] == book) {
      console.log(bookStyles);
      if (bookStyles.includes("flex")) {
        document.querySelector(".no-result-found").style.display = "none";
      } else {
        document.querySelector(".no-result-found").style.display = "flex";
      }
    }
  });
});

const searchInputByGenre = document.querySelector("[genre-search]");

searchInputByGenre.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const bookGenre = document.querySelectorAll(".book-genre");

  const bookStyles = [];

  bookGenre.forEach((book) => {
    const genre = book.textContent.toLowerCase();
    if (genre.indexOf(value) != -1) {
      book.parentElement.parentElement.parentElement.style.display = "flex";
      bookStyles.push(
        book.parentElement.parentElement.parentElement.style.display
      );
    } else {
      book.parentElement.parentElement.parentElement.style.display = "none";
      bookStyles.push(
        book.parentElement.parentElement.parentElement.style.display
      );
    }

    if (bookGenre[bookGenre.length - 1] == book) {
      console.log(bookStyles);
      if (bookStyles.includes("flex")) {
        document.querySelector(".no-result-found").style.display = "none";
      } else {
        document.querySelector(".no-result-found").style.display = "flex";
      }
    }
  });
});
