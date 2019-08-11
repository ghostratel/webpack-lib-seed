const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConf = require('./webpack.common.js')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const prodConf = {
  mode: 'production',
  output: {
    filename: 'index.min.js',
  },
  module: {
    rules: [
      {
        test: /(?<!\.module)\.(scss|css)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /(?<=\.module)\.(scss|css)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      DEV: JSON.stringify(false)
    })
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}

module.exports = merge(commonConf, prodConf)
