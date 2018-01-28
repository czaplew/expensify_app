const path = require('path');
const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {

   module: {
     rules: [
       {
         loader: 'babel-loader',
         test: /\.js$/,
         exclude: /node_modules/
       },       {
         test: [/\.s?css$/],
         use: [ 'style-loader', 'css-loader','sass-loader' ]
       }
     ]
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {
     contentBase: path.join(__dirname, 'public'),
     historyApiFallback:true
   }

 });
