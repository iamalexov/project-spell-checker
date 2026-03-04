import { checkText } from "./spellChecker.js";
import words from "./words.json" with { type: "json" };

const textarea = document.getElementById("text-input");
const output = document.getElementById("output-area");
const button = document.getElementById("check-btn");
const container = document.getElementById("container");
const img = document.createElement("img");


img.src = "https://upload.wikimedia.org/wikipedia/commons/d/df/Ford_F-150_Raptor_%28P552%29_IMG_3685.jpg"
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