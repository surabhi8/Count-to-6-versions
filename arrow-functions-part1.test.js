const mapReduce = require('./arrow-functions-part1.js');

{
  const inputs = [];
  test('empty array reduced to empty', () => {
    expect(mapReduce(inputs)).toBe(`[${inputs}] becomes `);
  });
}
{
  const inputs = ['Hello', 'arrow', 'functions'];
  mapReduce(inputs);
  test('["Hello","arrow","functions"] becomes Haf', () => {
    expect(mapReduce(inputs)).toBe(`[${inputs}] becomes Haf`);
  });
}
{
  const inputs = ['Hello', ' ', ' '];
  mapReduce(inputs);
  test('["Hello"," "," "] becomes H', () => {
    expect(mapReduce(inputs)).toBe(`[${inputs}] becomes `);
  });
}
