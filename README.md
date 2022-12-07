# Word Counter written in TypeScript

## Install project dependencies

- In the project root folder run: `npm install` (or `npm i`).

## Run tests

- In the project root folder run: `npx jest --watchAll`

---

## Exercise 1: Word Counter

Make a function called `countWords(textToParse: string): Map<string, number>` which takes one argument (string to search). Function returns a map of words and their count.

## Example

```ts
countWords('Hello world') // Map { 'Hello' => 1, 'world' => 1 }
countWords('Hello world world') // Map { 'Hello' => 1, 'world' => 2 } 
```

## Solution



