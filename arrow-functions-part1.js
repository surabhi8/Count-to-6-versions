function mapReduce(inputs) {
  const result = inputs.map(obj => obj[0]).reduce((dummyString, x) => dummyString + x, '');
  return `[${inputs}] becomes "${result}`;
}

module.exports = mapReduce;
