const { join, resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = '/'

module.exports = (options = {}) => ({
  entry: {
    bundle: './src/main.js',
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: options.dev ? 'assets/[name].js' : 'assets/[name].js?[chunkhash]',
    chunkFilename: 'assets/[id].js?[chunkhash]',
    publicPath: options.dev ? '/' : publicPath
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
    }),
    new webpack.DefinePlugin({
        __DEV__ : options.dev ? true : false
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
          warnings: false
      }
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    },
  },
  module: {
    rules: [
        {
            test: /.js?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                }
            ],
        },
        {
            test: /.vue?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'vue-loader',
                },
            ],
        },
        {
            test: /.json?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'json-loader',
                }
            ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
          use: [{
            loader: 'url-loader',
            options: {
              name: 'assets/[name].[ext]',
              limit: 10000
            }
          }]
        }
    ],
  }, // end module
})
