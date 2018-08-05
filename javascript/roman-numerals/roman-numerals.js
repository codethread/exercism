const translate = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
];

const toRoman = num => {
    return translate.reduce(([remainder, roman], [letter, value]) => {
        if (value > remainder) return [remainder, roman];

        const number = Math.floor(remainder / value);
        return [
            (remainder % value),
            roman.concat(new Array(number).fill(letter).join('')),
        ]
    }, [num, ''])[1];
}

module.exports = toRoman;
