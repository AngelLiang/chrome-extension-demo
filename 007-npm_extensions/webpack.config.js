const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production', // 或者 'development'，取决于你的需求
  entry: {
    hello: './src/hello.html',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/hello.html',
    //   filename: 'hello_generated.html',
    // }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/hello.html', to: 'hello.html' }, // 直接复制 hello.html
        { from: './src/hello.png', to: 'hello.png' },
        { from: './src/manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
  // ...其他配置...
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ]
      },
    ],
  },
};
