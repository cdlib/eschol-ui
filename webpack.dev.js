const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: 'dist',
  //   index: 'index.htm',
  //   publicPath: '/dist/js/'
  // },
  plugins: [
    new BrowserSyncPlugin({ 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
});
