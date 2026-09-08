export function clamp(value, minimum, maximum) {
  for (const [name, argument] of [
    ['value', value],
    ['minimum', minimum],
    ['maximum', maximum],
  ]) {
    if (typeof argument !== 'number' || !Number.isFinite(argument)) {
      throw new TypeError(`${name} must be a finite number`);
    }
  }

  if (minimum > maximum) {
    throw new RangeError('minimum must not be greater than maximum');
  }

  if (value < minimum) {
    return minimum;
  }

  if (value > maximum) {
    return maximum;
  }

  return value;
}
