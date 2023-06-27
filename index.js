const header = document.createElement("header");
const h1 = document.createElement("h1");
const body = document.querySelector("body");
const div = document.createElement("div");
const form = document.createElement("form");
const ul = document.createElement("ul");
const li = document.createElement("li");
const main = document.createElement("main");
const sideDiv = document.createElement("div");
const mainDiv = document.createElement("div");
const input = document.createElement("input");

h1.textContent = "Retro Game Inventory";

body.appendChild(header);
header.appendChild(h1);
body.appendChild(main);
div.classList.add("container");
main.appendChild(div);
sideDiv.classList.add("sidebar");
mainDiv.classList.add("main");
div.appendChild(mainDiv);
div.appendChild(sideDiv);

mainDiv.append(form);
form.append(input);
input.type = "text";
input.placeholder = "x";

function gameTemplate(name, inStock, price, used, rarity) {
  const li = document.createElement("li");
  li.textContent += name;

  if (inStock) {
    const strong = document.createElement("strong");
    strong.textContent = "In Stock: ";
    li.append(document.createElement("br"), strong, inStock);
  }

  if (price) {
    const strong = document.createElement("strong");
    strong.textContent = "Price: ";
    li.append(document.createElement("br"), strong, price);
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
}
