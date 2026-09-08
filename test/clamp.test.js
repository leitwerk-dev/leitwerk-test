import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/clamp.js';

test('clamps values below and above the inclusive bounds', () => {
  assert.equal(clamp(-5, 0, 10), 0);
  assert.equal(clamp(15, 0, 10), 10);
});

test('leaves interior values unchanged', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-2.5, -10, 3.5), -2.5);
  assert.equal(clamp(0.25, 0, 1), 0.25);
});

test('accepts exact bounds and clamps to equal bounds', () => {
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
  assert.equal(clamp(-100, 4, 4), 4);
  assert.equal(clamp(4, 4, 4), 4);
  assert.equal(clamp(100, 4, 4), 4);
});

test('rejects non-finite and non-number values in every argument position', () => {
  const invalidValues = ['5', null, undefined, {}, NaN, Infinity, -Infinity];

  for (const value of invalidValues) {
    assert.throws(() => clamp(value, 0, 10), TypeError);
    assert.throws(() => clamp(5, value, 10), TypeError);
    assert.throws(() => clamp(5, 0, value), TypeError);
  }
});

test('rejects reversed ranges and accepts ordered ranges', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
  assert.doesNotThrow(() => clamp(5, 0, 10));
});
