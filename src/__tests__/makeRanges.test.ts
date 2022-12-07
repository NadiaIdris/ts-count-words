import { makeRanges } from "../makeRanges";

test("makeRanges works", () => {
  expect(makeRanges([0, 1, 2, 5, 7])).toEqual(["0-2", "5", "7"]);
  expect(makeRanges([1, 3, 5])).toEqual(["1", "3", "5"]);
  expect(makeRanges([0])).toEqual(["0"]);
  expect(makeRanges([1, 2, 3, 4, 5])).toEqual(["1-5"]);
});

test("makeRanges with empty numbers array works", () => {
  expect(makeRanges([])).toEqual([]);
});
