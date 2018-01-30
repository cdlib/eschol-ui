const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "webpack-test-styles.css"
});

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }],
      })
    }]
  },
  plugins: [
    extractSass,
    new UglifyJSPlugin()
  ]
});
