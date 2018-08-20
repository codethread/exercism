const translation = Object.freeze([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
]);

const arraySizeOf = (v, l) => new Array(Math.floor(v)).fill(l).join('');

const toRoman = num => translation
    .reduce(([remainder, romanValue], [romanNumeral, value]) => (
        value > remainder
            ? [remainder, romanValue]
            : [
                remainder % value,
                romanValue.concat(arraySizeOf((remainder / value), romanNumeral)),
            ]
    ), [num, ''])[1];

module.exports = toRoman;
