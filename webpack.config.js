module.exports = {
  devServer: {
    contentBase: './',
    compress: true,
    port: 8081
  },

  devtool: 'inline-source-map',

  entry: './src/index.js',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
