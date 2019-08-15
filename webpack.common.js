const path = require('path')
module.exports = {
  output: {
    library: 'myLib',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /myLib\.min\.js/],
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'ts-loader'
        ]
      },
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
      },
      {
        test: /\.(svg|jpe?g|gif|png|bmp)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash:5].[ext]',
            outputPath: 'images',
            limit: 2048
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:5].[ext]',
            outputPath: 'fonts'
          }
        }
      }
    ]
  }
}
