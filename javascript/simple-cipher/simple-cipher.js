function validCipher(key) {
  if (!key) return null;
}

class Cipher {
  constructor(cipher) {
    this.possible = "abcdefghijklmnopqrstuvwxyz";
    this.randL = this.randL.bind(this);
    this.key = validCipher(cipher) || [...Array(100)].map(this.randL).join("");

    this.toNum = this.toNum.bind(this);
    this.asNumbers = this.key.split("").map(this.toNum);

    this.advance = this.advance.bind(this);
    this.difference = this.difference.bind(this);
  }
  randL() {
    return this.possible.charAt(
      Math.floor(Math.random() * this.possible.length)
    );
  }

  toNum(letter) {
    return this.possible.indexOf(letter);
  }

  advance(letter, pos) {
    const double = this.possible + this.possible;
    return double[this.asNumbers[pos] + this.possible.indexOf(letter)];
  }

  difference(letter, pos) {
    const double = this.possible + this.possible;
    return double[
      this.possible.indexOf(letter) - this.possible.indexOf(this.key[pos])
    ];
  }

  encode(sub) {
    return sub
      .split("")
      .map(this.advance)
      .join("");
  }

  decode(sub) {
    return sub
      .split("")
      .map(this.difference)
      .join("");
  }
}

export default Cipher;
