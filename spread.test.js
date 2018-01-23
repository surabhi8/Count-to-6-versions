const spreadDemo = require('./spread.js');

{
  const array1 = [1, 2, 3, 5, 6];
  spreadDemo(array1);
  test('Minimum of [1,2,3,5,6] is 1', () => {
    expect(spreadDemo(array1)).toBe(`The minimum of [${array1}] is 1`);
  });
}
{
  const array1 = [];
  spreadDemo(array1);
  test('Minimum of empty array is not defined', () => {
    expect(spreadDemo(array1)).toBe(`The minimum of [${array1}] is null`);
  });
}

{
  const array1 = [-1, -2, -4];
  spreadDemo(array1);
  test('Minimum of empty array is not defined', () => {
    expect(spreadDemo(array1)).toBe(`The minimum of [${array1}] is -4`);
  });
}
