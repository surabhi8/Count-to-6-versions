const makeImportant = require('./default-arguments-part2.js');

test('Hi!!!!! will be printed', () => {
  expect(makeImportant('Hi', 5)).toBe('Hi!!!!!');
});
test('Hello!!!!! will be printed', () => {
  expect(makeImportant('Hello')).toBe('Hello!!!!!');
});
test('Hello!!!!! will be printed', () => {
  expect(makeImportant('Hello', undefined)).toBe('Hello!!!!!');
});
test('function call with one of the argument as null gives null', () => {
  expect(makeImportant('Hello', null)).toBe(null);
});
test('function call with negative number as second argument gives null', () => {
  expect(makeImportant('Hello', -1)).toBe(null);
});
