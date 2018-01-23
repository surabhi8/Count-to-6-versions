const foot = require('./arrow-functions-part2.js');

foot.kick();
test('Output is Ouch!', () => {
  expect(foot.kick()).toBe('Ouch!');
});
