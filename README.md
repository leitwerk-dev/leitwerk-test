# leitwerk-test

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
