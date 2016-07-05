
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
//
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./App.jsx'],
  output: {
    path: './',
    filename:'index.js'
  },
  devServer:{
    inline:true,
    port: 3333
  },
  module:{
    loaders:[
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader:'babel',
        query:{
          presets:['es2015','react']
        }
      },
      // { test : /\.css/,
      //   include:__dirname+'/css',
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      // }
    ]
  },
//   plugins : [
//   HTMLWebpackPluginConfig,
//   new ExtractTextPlugin("bootstrap.css")
// ]
};
