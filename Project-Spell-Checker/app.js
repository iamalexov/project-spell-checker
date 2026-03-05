import { checkText } from "./spellChecker.js";

const textarea = document.getElementById("text-input");
const output = document.getElementById("output-area");
const button = document.getElementById("check-btn");
const container = document.getElementById("container");

const img = document.createElement("img");
img.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800";
container.appendChild(img);

let words = [];
let customDictionary = [];

async function loadDictionary() {
  const response = await fetch("./words.json");
  words = await response.json();
}

loadDictionary();

button.addEventListener("click", () => {
  const text = textarea.value;

  const errors = checkText(text, words, customDictionary);

  if (errors.length === 0) {
    output.value = "No spelling mistakes found.";
  } else {
    output.value = "Misspelled words:\n" + errors.join("\n");
  }
});

textarea.addEventListener("input", () => {
  output.value = "";
});