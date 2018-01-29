const path = require('path');

module.exports = {
  entry: './app/jsx/app.jsx',
  output: {
    filename: 'webpack-test.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-2']
          }
        }
      }
    ]
  }
};
