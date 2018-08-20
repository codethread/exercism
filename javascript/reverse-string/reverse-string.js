const R = require("ramda");

module.exports = R.pipe(
  R.split(""),
  R.reverse,
  R.join("")
);
