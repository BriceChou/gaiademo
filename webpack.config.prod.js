var config = require('./webpack.config.dev');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

config.plugins = (function(plugins) {
  var defineOptions = {
    'process.env.NODE_ENV': JSON.stringify('production')
  };

  var uglifyOptions = {
    ie8: false,
    ecma: 8,
    sourceMap: true,
    beautify: false,
    comments: false,
    warnings: false,
    compress: {
      collapse_vars: true,
      drop_console: true,
      warnings: false
    },
    mangle: {
      reserved: ['$super', '$', 'exports', 'require']
    },
    output: {
      beautify: false,
      comments: false
    }
  };

  return [new webpack.DefinePlugin(defineOptions)]
    .concat(plugins || [])
    .concat([
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(uglifyOptions)
    ]);
})(config.plugins);

module.exports = config;
