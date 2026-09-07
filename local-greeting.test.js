import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localGreeting } from './local-greeting.js';

test('greets an ordinary name', () => {
  assert.equal(localGreeting('Ada'), 'Hello, Ada!');
});

test('trims whitespace from a name', () => {
  assert.equal(localGreeting('  Grace Hopper  '), 'Hello, Grace Hopper!');
});

test('rejects blank strings', () => {
  assert.throws(() => localGreeting(''), TypeError);
  assert.throws(() => localGreeting('   \t\n'), TypeError);
});

test('rejects non-string values', () => {
  for (const value of [null, undefined, 42, {}, []]) {
    assert.throws(() => localGreeting(value), TypeError);
  }
});
