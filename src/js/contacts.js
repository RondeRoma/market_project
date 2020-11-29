import "../css/contacts.css";

import references from "./refs.js";
const { contactsSection } = references;
const game = ["камень", "ножницы", "бумага"];

function createButton(arr) {
  return arr.map((el) => {
    const btn = document.createElement("button");
    btn.textContent = el;
    btn.dataset.key = el;
    console.log(btn);
    return btn;
  });
}
const buttons = createButton(game);
console.log(buttons);
contactsSection.append(...buttons);

const result = document.createElement("p");
contactsSection.append(result);

contactsSection.addEventListener("click", (e) => {
  let index = Math.round(Math.random() * (game.length - 1));
  console.log(index);
  let user = e.target.dataset.key;
  console.log(user);
  let comp = game[index];
  console.log(comp);
  console.log(`user: ${user} - comp: ${comp}`);

  let msg;
  if (user === comp) {
    msg = "ничья";
  } else {
    (user === "ножницы" && comp === "бумага") ||
    (user === "бумага" && comp === "камень") ||
    (user === "камень" && comp === "ножницы")
      ? (msg = "юзер победил")
      : (msg = "comp победил");
  }
  result.textContent = msg;
});
