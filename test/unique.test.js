import { test } from 'node:test';
import assert from 'node:assert/strict';
import { unique } from '../src/unique.js';

test('removes duplicates while preserving first-seen order', () => {
  assert.deepEqual(unique(['b', 'a', 'b', 'c', 'a']), ['b', 'a', 'c']);
  assert.deepEqual(unique([NaN, 1, NaN, 1]), [NaN, 1]);
});

test('returns an empty array for empty input', () => {
  assert.deepEqual(unique([]), []);
});

test('does not mutate the input and returns a separate array', () => {
  const values = ['a', 'b', 'a'];
  const result = unique(values);

  assert.deepEqual(values, ['a', 'b', 'a']);
  assert.notEqual(result, values);
});

test('rejects non-array input', () => {
  for (const value of [null, undefined, 'values', 42, {}, new Set()]) {
    assert.throws(() => unique(value), TypeError);
  }
});
