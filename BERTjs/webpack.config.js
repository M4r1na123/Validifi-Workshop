const path = require('path');

module.exports = {
    entry: './extracted/src/transformers.js',
    output: {
        filename: 'token_bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production'
};
