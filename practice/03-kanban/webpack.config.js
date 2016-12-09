var webpack = require('webpack');

var config = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react'],
        plugins: []
      }
    }]
  }
};

module.exports = config;