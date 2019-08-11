const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConf = require('./webpack.common.js')

const devConf = {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /(?<!\.module)\.(scss|css)$/,
        use: [
          'style-loader',
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
          'style-loader',
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
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonConf, devConf)
