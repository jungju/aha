const { join, resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = '/editor'

module.exports = (options = {}) => ({
  entry: {
    bundle: './src/main.js',
    vendor: ['phaser']
  },
  devtool: 'source-map',
  output: {
    path: join(__dirname, 'dist'),
    filename: options.dev ? 'assets/[name].js' : 'assets/[name].js?[chunkhash]',
    chunkFilename: 'assets/[id].js?[chunkhash]',
    publicPath: options.dev ? '/editor' : publicPath
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      __DEV__ : options.dev ? true : false,
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
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
        test: /\.js$/,
        use: ['babel-loader'],
        include: join(__dirname, 'src')
      },
      {
        test: [ /\.vert$/, /\.frag$/ ],
        use: 'raw-loader'
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
    ]
  }
})