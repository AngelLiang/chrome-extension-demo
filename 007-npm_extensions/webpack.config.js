const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

// 获取 'src/content' 下的所有 .js 文件
const contentFiles = glob.sync('./src/content/*.js');
const contentPath = contentFiles.map((path) => ('./' + path))

// 获取 'src/content' 下的所有 .js 文件
const imagesFiles = glob.sync('./src/images/*.js');
const imagesPath = contentFiles.map((path) => ('./' + path))

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  // mode: 'product',
  entry: {
    content: contentPath,
    popup: './src/popup/popup.js',
    options: './src/options/options.js',
    background: './src/background.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: 'babel-loader'
  //     }
  //   ]
  // },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        // '.' 表示目标是 'dist' 目录
        { from: 'src/popup/popup.html', to: '.' },
        // { from: 'src/popup/popup.css', to: '.' },
        { from: 'src/options/options.html', to: '.' },
        { from: 'src/options/button.css', to: '.' },
        // { from: imagesPath, to: 'images/' },
        { from: 'src/images/get_started16.png', to: 'images/' },
        { from: 'src/images/get_started32.png', to: 'images/' },
        { from: 'src/images/get_started48.png', to: 'images/' },
        { from: 'src/images/get_started128.png', to: 'images/' },
        // 使用顶层目录的 manifest.json
        { from: 'manifest.json', to: '.' },
      ]
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
