const charNumNormalise = -97;
const characters = 'abcdefghijklmnopqrstuvwxyz';

export default class Cipher {
  constructor(key) {
    this.key = validate(key) || makeid(100, characters)
    this.keyAsValue = this.key.split('').map(charToNumber)
  }

  getKeyValue(i) {
    const values = this.keyAsValue;
    return values[i % values.length];
  }

  encode(str = '') {
    return str
      .split('')
      .map((l, idx) => {
        const rotation = charToNumber(l) + this.getKeyValue(idx)
        const normalisedRotation = rotation >= 26 ? (rotation - 26) : rotation

        return characters.charAt(normalisedRotation);
      })
      .join('')
  }

  decode(str = '') {
    return str
      .split('')
      .map((l, idx) => {
        const rotation = charToNumber(l) - this.getKeyValue(idx)
        const normalisedRotation = rotation >= 0 ? rotation : (rotation + 26);

        return characters.charAt(normalisedRotation);
      })
      .join('')
  }
}

function makeid(length, characters) {
  return new Array(length)
    .fill()
    .map(randomFrom(characters))
    .join('');
}

function randomFrom(characters) {
  return () => characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
}

function charToNumber (c) {
  return c.charCodeAt(0) + charNumNormalise;
}

function validate(key) {
  if (!key && key !== '') {
    return null;
  } else if (/^[a-z]+$/.test(key)) {
    return key
  } else {
    throw Error('Bad key');
  }
}
