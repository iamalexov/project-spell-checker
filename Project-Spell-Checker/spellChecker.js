export function checkText(text, dictionary, customDictionary = []) {
  const errors = [];

  const combinedDictionary = [
    ...dictionary.map(word => word.toLowerCase()),
    ...customDictionary.map(word => word.toLowerCase())
  ];

  const tokens = text.split(/\s+/);

  for (let token of tokens) {
    // Remove punctuation at start and end
    token = token.replace(/^[,.?!":;]+|[,.?!":;]+$/g, "");

    // Skip empty
    if (!token) continue;

    // Proper nouns (capital first letter)
    if (token[0] === token[0].toUpperCase()) continue;

    // Handle hyphen words
    const parts = token.split("-");

    for (const part of parts) {
      const lower = part.toLowerCase();

      if (!combinedDictionary.includes(lower)) {
        errors.push(part);
      }
    }
  }

  return errors;
}