const R = require('ramda');

function DnaTranscriber() {
    const rel = Object.freeze({
        C: 'G',
        G: 'C',
        A: 'U',
        T: 'A',
    });

    const valid = (x) => {
        if (rel[x]) return x;
        throw new Error('Invalid input');
    };

    const transcribe = R.prop(R.__, rel);

    return {
        toRna: R.pipe(
            R.split(''),
            R.map(
                R.when(valid, transcribe),
            ),
            R.join(''),
        ),
    };
}

module.exports = DnaTranscriber;
