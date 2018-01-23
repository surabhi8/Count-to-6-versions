function makeImportant(string, number = string.length) {
  if (number === null || number < 0) {
    return null;
  }
  return `${string}${'!'.repeat(number)}`;
}
module.exports = makeImportant;
