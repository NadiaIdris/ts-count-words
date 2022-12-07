enum Style {
  Bold = "bold",
  None = "none",
}
type StyledContent = [string, Style.Bold | Style.None];

export const highlightSyntax = (content: string): StyledContent[] => {
  // Early return if content is empty.
  if (content === "") return [];
  // Convert content to an array of words.
  const words: string[] = content.split(" ");
  // Create an array of StyledTexts.
  const highlightedText: StyledContent[] = [];
  // Loop over words.
  // If the word is "cat" or "dog",
  //    push ["cat", "bold"] or ["dog", "bold"] to highlightedText.
  //    continue the loop
  // push ["word", "none"] to highlightedText.
  for (const word of words) {
    if (word === "cat" || word === "dog") {
      highlightedText.push([word, Style.Bold]);
      continue;
    }
    highlightedText.push([word, Style.None]);
  }

  return highlightedText;
};