const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log("RESPONSE OBJECT", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    })
    .then((books) => {
      console.log("books:", books);
      const row = document.getElementById("card-container");
      books.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col", "mt-5");
        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        card.innerHTML = `
                  <img src="${book.img}"class="card-img-top" ${book.title}" style="height:300px;">
                  <div class="card-body">
                      <h5 class="card-title">${book.title}</h5>
                      <p class="card-text">€${book.price}</p>
                      <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
                  </div>
              `;

        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((err) => console.log("Errore: ", err));
};

function removeCard(button) {
  button.closest(".col").remove();
}

window.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
