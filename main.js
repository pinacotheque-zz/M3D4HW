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
        <div class="card col-4">
          <img src="${book.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">
            ${book.price}
            </p>
            <button type="button" class="add-Chart btn btn-primary ">Add to chart</button>
          </div>
        </div>`
      );
      const libraryContent = booksAsHTML.join("");
      parent.innerHTML = libraryContent;
    });

  let addCart = document.querySelectorAll(".card-body  .add-Chart");
  console.log(addCart);

  for (let i = 0; i < addCart.length; i++) {
    button = addCart[i];
    button.addEventListener("click", () => {
      // addToChart();
      console.log("clicked");
    });
  }

  function addToChart() {
    chartCard.addEventListener;
  }
};
