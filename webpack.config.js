const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    library: 'printJS',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'print.js',
    sourceMapFilename: 'print.map',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
