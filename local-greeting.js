export function localGreeting(name = 'Leitwerk') {
  if (typeof name !== 'string') {
    throw new TypeError('name must be a non-blank string');
  }

  const trimmedName = name.trim();
  if (trimmedName === '') {
    throw new TypeError('name must be a non-blank string');
  }

  return `Hello, ${trimmedName}!`;
}
