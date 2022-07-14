const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:'./js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer:  {
        open: true,
        host: 'localhost'
    },
    module:{
        rules:[],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
}