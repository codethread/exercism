module.exports = {
    extends: 'airbnb',
    rules: {
        indent: ['error', 4],
        'func-names': 'off',
        'no-underscore-dangle': 'off',
    },
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    settings: {}
}

