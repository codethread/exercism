const R = require("ramda");

function DnaTranscriber() {
  const inputs = {
    C: "G",
    G: "C",
    A: "U",
    T: "A"
  };

  const throwIfInvalid = options => input => {
    if (R.not(R.has(input, options))) throw new Error("Invalid input");
  };

  const transcribeIfValid = R.pipe(
    R.tap(throwIfInvalid(inputs)),
    R.prop(R.__, inputs)
  );

  return {
    toRna: R.pipe(
      R.split(""),
      R.map(transcribeIfValid),
      R.join("")
    )
  };
}

module.exports = DnaTranscriber;
