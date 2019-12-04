const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    build: path.join(__dirname, './build'),
}

module.exports = {
    entry: {
        app: PATHS.src
    },

    output: {
        filename: '[name].js',
        path: PATHS.dist,
        publicPath: '/'
    },

    devServer: {
        overlay: true
    },
}