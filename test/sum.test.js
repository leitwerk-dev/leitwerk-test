import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from '../src/sum.js';

test('sums positive numbers', () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test('sums negative and fractional numbers', () => {
  assert.equal(sum([-2.5, 1, 0.25]), -1.25);
});

test('returns zero for an empty array', () => {
  assert.equal(sum([]), 0);
});

test('rejects non-arrays', () => {
  for (const value of [null, undefined, 1, '1', {}]) {
    assert.throws(() => sum(value), TypeError);
  }
});

test('rejects non-number and non-finite elements', () => {
  for (const value of [
    '1',
    null,
    {},
    NaN,
    Infinity,
    -Infinity,
  ]) {
    assert.throws(() => sum([value]), TypeError);
  }
});
