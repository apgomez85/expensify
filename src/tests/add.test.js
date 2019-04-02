const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should greet name', () => {
  const result = generateGreeting('Adrian');
  expect(result).toBe('Hello Adrian!');
});

test('should greet with no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});
