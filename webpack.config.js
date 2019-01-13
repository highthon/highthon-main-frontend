var path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                loader:'url-loader',
                options: {
                    limit: 25000,
                },

            },
            {
                test: /\.(jpg|png|svg)$/,
                loader:'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                },
            }
        ]
    }
};