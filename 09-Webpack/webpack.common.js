const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module:{
    rules:[
        {
            test:/\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test:/\.s(a|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]  
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
    inject: "body"
  })],
};
