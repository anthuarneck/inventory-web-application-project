const header = document.createElement("header");
const h1 = document.createElement("h1");
const body = document.querySelector("body");
const div = document.createElement("div");
const form = document.createElement("form");
const ul = document.createElement("ul");
const li = document.createElement("li");
const section = document.createElement("section");
const main = document.createElement("main");

h1.textContent = "Retro Game Inventory";

body.appendChild(header)
header.appendChild(h1)
body.appendChild(main)
div.classList.add("container")
main.appendChild(div)

