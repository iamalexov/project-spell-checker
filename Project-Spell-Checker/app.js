import { checkText } from "./spellChecker.js";
import words from "./words.json" assert { type: "json" };

const textarea = document.getElementById("text-input");
const output = document.getElementById("output-area");
const button = document.getElementById("check-btn");
const container = document.getElementById("container");
const img = document.createElement("img");


img.src = "https://images.unsplash.com/photo-1518770660439-4636190af475";
container.appendChild(img);

let customDictionary = [];

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