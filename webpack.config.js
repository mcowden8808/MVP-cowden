var path = require('path');
var SRC_DIR = path.join(__dirname, './client');
var DIST_DIR = path.join(__dirname, './public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ["transform-class-properties"]
        },
      },
      {
  test: /\.css$/i,
    use: ["style-loader", "css-loader"]
}
    ]
  }
};