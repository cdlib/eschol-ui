const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const webpack = require('webpack'); // for webpack.HotModuleReplacementPlugin()

module.exports = merge(common, {
  // devServer: {
  //   publicPath: '/dist/js',
  //   hot: true
  // },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "postcss-loader"
        },
        {
          loader: "sass-loader"
        }
      ],
    }]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
    new BrowserSyncPlugin({ 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
});
