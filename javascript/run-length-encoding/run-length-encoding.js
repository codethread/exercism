const expandNumber = (str) => {
    const l = str.split('').pop();
    const n = parseInt(str, 10);
    return new Array(parseInt(n, 10)).fill(l).join('')
};
const collapseChars = c => `${c.length}${c[0]}`;

module.exports = {
    encode(s) { return s.replace(/(.)\1+/g, collapseChars); },
    decode(s) { return s.replace(/(\d+\D)/g, expandNumber); },
};
