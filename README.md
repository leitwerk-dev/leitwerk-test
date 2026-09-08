# leitwerk-test
End-to-end integration tests for the public Leitwerk GitHub issue flow

## `sum(values)`

Import `sum` from `src/sum.js` to add an array of finite numbers. It returns `0` for an empty array and throws `TypeError` when the input is not an array or contains a non-number or non-finite value.

```js
import { sum } from './src/sum.js';

sum([1, 2, 3]); // 6
```
