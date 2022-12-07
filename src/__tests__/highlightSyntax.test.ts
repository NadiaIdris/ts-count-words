import { highlightSyntax } from "../highlightSyntax";

test("highlightSyntax works", () => {
  const expected = [
    ["the", "none"],
    ["cat", "bold"],
    ["jumped", "none"],
    ["over", "none"],
    ["the", "none"],
    ["old", "none"],
    ["dog", "bold"],
  ]
  expect(highlightSyntax("the cat jumped over the old dog")).toEqual(expected);
});
