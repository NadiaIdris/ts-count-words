import { countWords } from "../countWords";

test("countWords works", () => {
  const stringToCount = "one two one one three ten four";
  const wordCounts = countWords(stringToCount);
  const result = new Map<string, number>([
    ["one", 3],
    ["two", 1],
    ["three", 1],
    ["ten", 1],
    ["four", 1],
  ]);
  expect(wordCounts).toEqual(result);
});

test("countWords with empty string works", () => {
  const stringToCount = "";
  const wordCounts = countWords(stringToCount);
  console.log(wordCounts)
  const result = new Map<string, number>();
  expect(wordCounts).toEqual(result);
});

