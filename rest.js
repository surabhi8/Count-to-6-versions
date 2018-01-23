function average(...args) {
  if (args.length === 0) {
    return null;
  }
  return args.reduce((sum, x) => sum + x, 0) / args.length;
}
module.exports = average;
