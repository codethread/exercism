const R = require('ramda');

module.exports = {
    encode: (input = '') => { //replace whole thing with regex
        const replacer = (_, capture) => {
            // console.log(v1, capture)
            // console.log( capture)
            return `${capture.length === 1 ? '' : capture.length}${capture[0]}`
        }
        // return input.replace(/(\D+)\1/g, replacer); // HACK: remove 1s

        const output = input
            .split('')
            .reduce((arr, char) => {
                const [count, letter] = arr.pop() || [];
                return letter === char
                    ? [...arr, [(count + 1), letter] ]
                    : [...arr, [count, letter], [1, char]]
            }, []);

        return R.flatten(output)
            .join('')
            .replace(/1(\D)/g, (_,capture) => capture); // HACK: remove 1s

    },
    decode: (input) => {
        return input
    }
};
