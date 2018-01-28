const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
