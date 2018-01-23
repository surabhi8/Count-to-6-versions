const greetPerson = require('./template-strings');

{
  const name = 'Surabhi';
  const demoString = `Hello, ${name}!Your name lowercased is ${name.toLowerCase()}`;
  test('String is interpolated with Surabhi', () => {
    expect(greetPerson(name)).toBe(demoString);
  });
}

{
  const name = '';
  const demoString = `Hello, ${name}!Your name lowercased is ${name.toLowerCase()}`;
  test('String is interpolated with Surabhi', () => {
    expect(greetPerson(name)).toBe(demoString);
  });
}
