export function countWords(stringToCount: string): Map<string, number>{ 
  // Early return if the string is empty.
  if (stringToCount === "") return new Map<string, number>();
  
  // Convert string to array of words.
  const words = stringToCount.split(" ");
  // Create a map to store the word counts.
  const wordCounts = new Map<string, number>();
  // Loop through the words and count them.
  words.forEach(word => { 
    // Check if the word is already in the map.
    if (wordCounts.has(word)) {
      wordCounts.set(word, wordCounts.get(word)! + 1);
    } else { 
      wordCounts.set(word, 1);
    }
  })
  return wordCounts;
}