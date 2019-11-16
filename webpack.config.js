const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/Index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};