function spreadDemo(array1) {
  if (array1.length === 0) {
    return `The minimum of [${array1}] is null`;
  }
  const min1 = Math.min(...array1);
  return `The minimum of [${array1}] is ${min1}`;
}

module.exports = spreadDemo;
