const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const PATHS = {
//     src: path.join(__dirname, './src'),
//     dist: path.join(__dirname, './dist'),
//     build: path.join(__dirname, './build'),
// }

module.exports = {
    mode: 'development',
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './src/index.html'
        }),
    ],
};