const destructure = require('./destructuring.js');

{
  const inputs = [1, 'jdoe', 'jdoe@example.com', 'John', 'Doe'];
  const obj = {
    username: 'jdoe',
    email: 'jdoe@example.com',
  };
  test('Object is created with username and email property by destructuring array', () => {
    expect(destructure(inputs)).toBe(obj);
  });
}
{
  const inputs = [];

  const obj = {};
  test('Empty object is created', () => {
    expect(destructure(inputs)).toBe(obj);
  });
}
{
  const inputs = [1, 'rachel'];
  const obj = {
    username: 'rachel',
    email: undefined,
  };
  test('Empty object is created', () => {
    expect(destructure(inputs)).toBe(obj);
  });
}
