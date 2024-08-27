const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true
      },
      
      module: {
        rules: [
          {
            test: /\.(scss)$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: () => [
                      require('autoprefixer')
                    ]
                  }
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          }
          ,{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          { 
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
        ]
      },
      
  plugins: [
    new HtmlWebpackPlugin({
      title: "Alberto Agrò | Tech News",
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, 'variables.env')
    })
  ],
  
};