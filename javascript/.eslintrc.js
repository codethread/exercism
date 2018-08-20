module.exports = {
  extends: ["airbnb", "prettier"], // turns off styling rules
  rules: {
    "func-names": "off",
    "no-underscore-dangle": "off",
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {}
};