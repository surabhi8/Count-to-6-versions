const average = require('./rest.js');

test('Average of [1,2,3] is 2', () => {
  expect(average(1, 2, 3)).toBe(2);
});

test('Average of empty argument is empty', () => {
  expect(average()).toBe(null);
});

test('Average of [1.0,1.0,1.0]', () => {
  expect(average(1.0, 1.0, 1.0)).toBe(1.0);
});
