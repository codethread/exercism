class Cipher {
  static key() {
    return (Math.random() + 1).toString(36).substring(7);
  }
}

module.exports = Cipher;
