import { countPatterns } from "../countPatterns";

test("countPatters works", () => {
  expect(countPatterns("bark dog dogma", "dog")).toBe(2);
  expect(countPatterns("one two", "dog")).toBe(0);
});
