const midpoint = require('./default-arguments-part1.js');

test('Mid point of 1,2 is 1.5', () => {
  expect(midpoint(1, 2)).toBe(1.5);
});

test('Mid point of 1,undefined is 1', () => {
  expect(midpoint(1, undefined)).toBe(1);
});
test('Mid point of null,1 is ', () => {
  expect(midpoint(null, 1)).toBe(0.5);
});

test('Mid point of null,1 is ', () => {
  expect(midpoint(null, null)).toBe(0);
});
