// trying to get into the ramda way of things
const R = require("ramda");

const divisibleBy = R.curry((x, y) => R.modulo(y, x) === 0);
const notDivisibleBy = R.complement(divisibleBy);

const isLeap = R.both(
  divisibleBy(4),
  R.either(notDivisibleBy(100), divisibleBy(100))
);

const Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  return isLeap(this.year);
};

module.exports = Year;
