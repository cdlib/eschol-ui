const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
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
    new BrowserSyncPlugin({ 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
});
