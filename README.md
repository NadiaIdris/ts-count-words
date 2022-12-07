# Word Counter written in TypeScript

## Install project dependencies

- In the project root folder run: `npm install` (or `npm i`).

## Run tests

- In the project root folder run: `npx jest --watchAll`

---

## Exercise 1: word counter

Make a function called `countWords(textToParse: string): Map<string, number>` which takes one argument (string to search). Function returns a map of words and their count.

## Example

```ts
countWords('Hello world') // Map { 'Hello' => 1, 'world' => 1 }
countWords('Hello world world') // Map { 'Hello' => 1, 'world' => 2 } 
```

## Solution
See [countWords.ts](/src/countWords.ts) file.

# Exercise 2: range maker

Make a function called `makeRanges(numbers: number[]): string[]` which take one argument (array of numbers). Function returns an array of strings.

Note: Each number is unique and in acending order.

## Example

```ts
makeRanges([0, 1, 2, 5, 7]) // ['0-2', '5', '7']
makeRanges([0, 1, 2, 5, 7, 8, 9]) // ['0-2', '5', '7-9']
makeRanges([]) // [""]
```



