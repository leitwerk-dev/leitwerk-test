# leitwerk-test

End-to-end integration tests for the public Leitwerk GitHub issue flow.

## `unique`

`unique(values)` is exported from `src/unique.js`. It accepts an array and
returns a new array containing each value once, in first-seen order. Uniqueness
uses JavaScript `Set` equality (including `NaN`), and the input array is never
mutated. Non-array inputs throw `TypeError`.

Run the test suite with:

```sh
npm test
```
