const body = document.querySelector("body");
const div = document.querySelector("div");
const form = document.querySelector("form");
const ul = document.createElement("ul");
const li = document.createElement("li");
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

    let name = event.target.name.value
    let price = event.target.price.value
    let inStock = event.target.inStock.value
    let used = event.target.price.value
    let rarity = event.target.rarity.value

    generateGame(name, price, inStock, used, rarity)

    form.reset();
})

function gameTemplate(name, price, inStock, used, rarity) {
  const li = document.createElement("li");
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
  remove.innerText = "Remove Contact";
  console.log(remove);
  li.append(remove);

  remove.addEventListener("click", (event) => {
    li.remove();
  });

  return li;
}

function generateGame(name, price, inStock, used, rarity) {
  const li = gameTemplate(name, price, inStock, used, rarity);

  const ul = document.querySelector("ul");
  ul.append(li);
}

