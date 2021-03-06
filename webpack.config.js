var webpack = require('webpack');
var path = require('path');
// Build directory is where the bundle file will be placed
var BUILD_DIR = path.resolve(__dirname, 'react-client/dist');
// App directory is where all of your raw JSX files will be placed
var APP_DIR = path.resolve(__dirname, 'react-client/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
