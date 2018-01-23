function destructure(numbers) {
  const result = {};
  [, result.username, result.email] = numbers;
  return result;
}
module.exports = destructure;
