const R = require('ramda');

// return input.replace(/(\D+)\1/g, replacer); // TODO: can this be done with regex?

const groupChars = (arr, char) => {
    const [headCount, headLetter] = arr.pop() || [];
    return char === headLetter
        ? [...arr, [(headCount || 1) + 1, headLetter]]
        : [...arr, headCount, headLetter, [null, char]];
};

const flattenLastElement = (arr) => {
    const el = arr.pop() || [];
    arr.push(...el);
    return arr;
}

module.exports = {
    encode: R.pipe(
        R.split(''),
        R.reduce(groupChars, []),
        flattenLastElement,
        R.join(''),
    ),
    decode: input => input,
};
