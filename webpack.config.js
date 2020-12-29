const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist')
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ]
}