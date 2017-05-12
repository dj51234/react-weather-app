module.exports = {
  entry: './app/js/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react','stage-0']
        },
        test: /\.js$/,
        exclude: /node_modules|bower_components/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
