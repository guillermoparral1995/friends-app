const { VueLoaderPlugin } = require('vue-loader');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        filename: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}