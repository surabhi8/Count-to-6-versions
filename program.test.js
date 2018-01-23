const print = require('./program');

print();
test('HELLO ES6 will be printed', () => {
  expect(print()).toBe('HELLO ES6');
});
