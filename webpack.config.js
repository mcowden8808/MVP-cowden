const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    app: `./client/Index.jsx`
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};