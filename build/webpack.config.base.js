const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    index: './src/index.js',
    math: './src/modules/math.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(jpg|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      use: ['file-loader']
    }, {
      test: /\.(csv|tsv)$/,
      use: ['csv-loader']
    }, {
      test: /\.xml$/,
      use: ['xml-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin([resolve('dist')]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};
