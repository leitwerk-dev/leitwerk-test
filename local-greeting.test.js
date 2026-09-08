import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localGreeting } from './local-greeting.js';

test('greets an ordinary name', () => {
  assert.equal(localGreeting('Ada'), 'Hello, Ada!');
});

test('uses the default greeting when no name is supplied', () => {
  assert.equal(localGreeting(), 'Hello, Leitwerk!');
  assert.equal(localGreeting(undefined), 'Hello, Leitwerk!');
});

test('trims whitespace from a name', () => {
  assert.equal(localGreeting('  Grace Hopper  '), 'Hello, Grace Hopper!');
});

test('rejects blank strings', () => {
  assert.throws(() => localGreeting(''), TypeError);
  assert.throws(() => localGreeting('   \t\n'), TypeError);
});

test('rejects non-string values', () => {
  for (const value of [null, 42, {}, []]) {
    assert.throws(() => localGreeting(value), TypeError);
  }
});
