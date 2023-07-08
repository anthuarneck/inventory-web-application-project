const body = document.querySelector("body");
const div = document.querySelector("div");
const form = document.querySelector("form");

let errorMessage = document.createElement("p");
errorMessage.style.color = "red";
form.append(errorMessage);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = event.target.name.value;
  let price = event.target.price.value;
  let stock = event.target.stock.value;
  let quality = event.target.quality.value;
  let rarity = event.target.rarity.value;

  if (!name) {
    errorMessage.textContent = "Error: Game must contain a title";
  } else if (!price) {
    errorMessage.textContent = "Error: Game must contain a price";
  } else if (!stock) {
    errorMessage.textContent = "Error: Game must contain stock data";
  } else {
    errorMessage.textContent = "";
    generateGame(name, price, stock, quality, rarity);
  }

  form.reset();
});

function gameTemplate(name, price, stock, quality, rarity) {
  const li = document.createElement("li");
  li.textContent += name;

  if (price) {
    const strong = document.createElement("strong");
    strong.textContent = "Price: ";
    li.append(document.createElement("br"), strong, "$", price);
  }
  if (stock) {
    const strong = document.createElement("strong");
    strong.textContent = "In Stock: ";
    li.append(document.createElement("br"), strong, stock);
  }
  if (quality) {
    const strong = document.createElement("strong");
    strong.textContent = "New/Used: ";
    li.append(document.createElement("br"), strong, quality);
  }
  if (rarity) {
    const strong = document.createElement("strong");
    strong.textContent = "Rarity: ";
    li.append(document.createElement("br"), strong, rarity);
  }
  const remove = document.createElement("button");
  remove.innerText = "Remove";
  const update = document.createElement("button");
  update.innerText = "Update";

  li.append(document.createElement("br"), remove, update);

  remove.addEventListener("click", (event) => {
    li.remove();
  });

  update.addEventListener("click", (event) => {
    if (stock == "Yes") {
      stock = "No";
    }
  });
  return li;
}

function generateGame(name, price, stock, quality, rarity) {
  const li = gameTemplate(name, price, stock, quality, rarity);

  const ul = document.querySelector("ul");
  ul.append(li);
}