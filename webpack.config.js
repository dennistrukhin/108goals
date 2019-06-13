const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        publicPath: '/',
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            favicon: "./src/ico/favicon.ico"
        })
    ],
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    },
};