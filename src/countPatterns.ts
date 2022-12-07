export const countPatterns = (
  stringToCount: string,
  pattern: string
): number => {
  // Early return if the string is empty.
  if (stringToCount === "") return 0;
  // Convert pattern to array of chars.
  const patternChars = [ ...pattern ];  
  // Make a variable to track the number of matches.
  let numOfMatches: number = 0;
  // Make a variable to track the current matching string.
  let currentMatch = ""; 
  let patternIndex = 0;
  // Loop over the stringToCount.
  // If current char matches the char of the pattern, add the current char to currentMatch.
  //      if currentMatch is equal to the pattern, increment the numOfMatches by one. Clear currentMatch (set to ""). Set patternIndex to 0. Continue the loop.
  //      Increment the patternIndex by one. Continue the loop.
  // Reset currentMatch to empty string and patternIndex to 0.
  for (let i = 0; i < stringToCount.length; i++) {
    const currentChar = stringToCount[i];
    const patternChar = patternChars[ patternIndex ];
    if (currentChar === patternChar) {
      currentMatch += currentChar;
      if (currentMatch === pattern) {
        numOfMatches += 1;
        currentMatch = "";
        patternIndex = 0;
        continue;
      }
      patternIndex += 1;
      continue;
    }
    currentMatch = "";
    patternIndex = 0;
  }

  return numOfMatches;
};

/* 
 Test data:
 "bark dog dogma dhi"  <- dog [d, o, g]
*/
