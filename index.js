const body = document.querySelector("body");
const div = document.querySelector("div");
const form = document.querySelector("form");
// const ul = document.querySelector("ul");
// const li = document.querySelector("li");
const main = document.createElement("main");
const sideDiv = document.createElement("div");
const mainDiv = document.createElement("div");
const input = document.createElement("input");

body.appendChild(main);
main.appendChild(div);
sideDiv.classList.add("sidebar");
mainDiv.classList.add("main");
div.appendChild(mainDiv);
div.appendChild(sideDiv);

// mainDiv.append(form);
// form.append(input);
// input.type = "text";
// input.placeholder = "x";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let image = event.target.image.value;
  let name = event.target.name.value;
  let price = `$${event.target.price.value}`;
  let inStock = event.target.inStock;
  let used = event.target.used.value;
  let rarity = event.target.rarity.value;

  generateGame(image, name, price, inStock, used, rarity);

  form.reset();
});

function gameTemplate(image, name, price, inStock, used, rarity) {
  const li = document.createElement("li");

  if (image) {
    li.append(document.createElement("br"), image);
  }

  li.textContent += name;

  if (price) {
    const strong = document.createElement("strong");
    strong.textContent = "Price: ";
    li.append(document.createElement("br"), strong, price);
  }
  if (inStock) {
    const strong = document.createElement("strong");
    strong.textContent = "In Stock: ";
    li.append(document.createElement("br"), strong, inStock);
  }
  if (used) {
    const strong = document.createElement("strong");
    strong.textContent = "New/Used: ";
    li.append(document.createElement("br"), strong, used);
  }
  if (rarity) {
    const strong = document.createElement("strong");
    strong.textContent = "Rarity: ";
    li.append(document.createElement("br"), strong, rarity);
  }
  const remove = document.createElement("button");
  remove.innerText = "Remove Game";
  li.append(remove);

  remove.addEventListener("click", (event) => {
    li.remove();
  });

  return li;
}

function generateGame(image, name, price, inStock, used, rarity) {
  const li = gameTemplate(image, name, price, inStock, used, rarity);

  const ul = document.querySelector("ul");
  ul.append(document.createElement("br"), li);
}
