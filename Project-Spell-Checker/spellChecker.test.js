import { checkText } from "./spellChecker.js";

const dictionary = ["he", "go", "to", "the", "island", "make", "fire"];

describe("checkText", () => {

  test("returns empty array if all words are correct", () => {
    const text = "he go to the island";
    const result = checkText(text, dictionary);

    expect(result).toEqual([]);
  });
});