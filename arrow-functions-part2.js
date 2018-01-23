
const foot = {
  kick() {
    this.yelp = 'Ouch!';
    setImmediate(() => this.yelp);
  },
};
module.exports = foot;
