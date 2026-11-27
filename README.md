# leitwerk-test
End-to-end integration tests for the public Leitwerk GitHub issue flow

## `sum(values)`

Import `sum` from `src/sum.js` to add an array of finite numbers. It returns `0` for an empty array and throws `TypeError` when the input is not an array or contains a non-number or non-finite value.

```js
import { sum } from './src/sum.js';

sum([1, 2, 3]); // 6
```

End-to-end integration tests for the public Leitwerk GitHub issue flow.

## `clamp(value, minimum, maximum)`

The `clamp` helper limits a finite number to inclusive minimum and maximum
bounds. All three arguments must be finite numbers; invalid arguments throw a
`TypeError`, and a minimum greater than the maximum throws a `RangeError`.

```js
import { clamp } from './src/clamp.js';

clamp(12, 0, 10); // 10
clamp(5, 0, 10);  // 5
```
