export function sum(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array of finite numbers');
  }

  let total = 0;
  for (const value of values) {
    if (!Number.isFinite(value)) {
      throw new TypeError('values must be an array of finite numbers');
    }
    total += value;
  }

  return total;
}
