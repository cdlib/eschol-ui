const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin({
  filename: "../css/vendor.css"
});
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadCssPlugin = require('preload-css-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
  entry: './app/jsx/app.jsx',
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
      },
      { // for vendor CSS:
        test: /\.css$/,
        use: extractCSS.extract({
          use: [
            {
              loader: "css-loader"
            }
          ],
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../images/'
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../fonts/'
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    extractCSS,
    new HtmlWebpackPlugin({
      template: './app/template.html',
      filename: path.resolve(__dirname, 'dist/index.html'), // output
    }),
    new PreloadCssPlugin({
      noscript: false,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new SassLintPlugin({
      configFile: 'sass-lint-config.yml',
      context: 'app/scss/',
      ignorePlugins: ['html-webpack-plugin', 'extract-text-webpack-plugin'],
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
};
