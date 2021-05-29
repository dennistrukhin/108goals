const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/docs',
        publicPath: '/',
        filename: '[name].[contenthash].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss|css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },


        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new FaviconsWebpackPlugin('./src/ico/favicon.png')
    ],
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    },
};