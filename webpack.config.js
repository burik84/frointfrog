const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

// const PATHS = {
//     src: path.join(__dirname, './src'),
//     dist: path.join(__dirname, './dist'),
//     build: path.join(__dirname, './build'),
// }

module.exports = {
    // entry: ['./src/js/index.js',
    //     './src/scss/style.scss'
    // ],
    entry: {
        app: './src/index.js'
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: './js/bundle.js'
    // },
    output: {
        // Имя выходных файлов если несколько точек входа - [name].js
        filename: "[name].js",
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ?
                    'style-loader' :
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            url: true,
                            import: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: './css/style.bundle.css',
        }),
    ],
};