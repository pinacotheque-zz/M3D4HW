let shopCollection = [];
const catagorized = document.getElementById("cards");

window.onload = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((books) => {
      console.log(books);
      const parent = document.getElementById("library-content");
      const booksAsHTML = books.map(
        (book) => `
        <div class="card col-4 product">
          <img src="${book.img}" class="card-img-top" style="width: 180px; height: 260px; object-fit:cover;align-items:center;" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">
            ${book.price} $
            </p>
            
            
            <div class="btn-group" role="group" aria-label="Basic example">
              
              <button type="button" class="add-Chart btn btn-danger ">Add to chart</button>
              <button type="button" class="btn btn-light">Ignore</button>
            </div>
          </div>
        </div>`
      );
      const libraryContent = booksAsHTML.join("");
      parent.innerHTML = libraryContent;
      let addCart = document.querySelectorAll(".btn-danger");
      let forgetAbtit = document.querySelectorAll(".btn-light");
      let selectedBook = document.querySelectorAll(".product");
      for (let i = 0; i < addCart.length; i++) {
        button = addCart[i];
        button.addEventListener("click", () => {
          shopCollection.push(selectedBook);
          button.innerText = "Added to chart";
          // addToChart();
          console.log("clicked");
        });
        ignoreBtn = forgetAbtit[i];
        ignoreBtn.addEventListener("click", () => {
          selectedBook[i].style.display = "none";
          // addToChart();
        });
      }
    });
};
