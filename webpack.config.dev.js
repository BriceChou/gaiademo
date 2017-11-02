var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    root: [path.join(__dirname, 'src')],
    modulesDirectories: ['node_modules', 'src', 'scss'],
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'base-component': path.resolve('./node_modules/base-component')
    }
  },
  entry: {
    app: './src/app.js',
    vendors: ['react']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass', { publicPath: './' })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
