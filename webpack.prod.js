const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConf = require('./webpack.common.js')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
const prodConf = {
  entry: {
    index: path.resolve(__dirname, 'src/index.ts')
  },
  mode: 'production',
  output: {
    // library file name
    filename: 'myLib.min.js',
    path: path.resolve(__dirname, 'lib'),
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
