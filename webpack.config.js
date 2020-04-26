// This is node.js syntax because a webpack runs on Node.js and in the end it just exploits this object from this file and this has to be our configuration object.
// jshint esversion: 6
// const path = require('path');
// const autoprefixer = require('autoprefixer');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   // we need to provide in this configuration is the entry point that we tell where peg at which file it should have a look at first because what webpage will do is it will start its journey at one file then look at all the imports of this file and have a look at these files as well and then bundle all these files to gather in the end.
//   entry: './src/index.js',
//   // we also need to tell web pick where to put the generated output 
//   output: {
//     // output entry which can be an object where we can to find the path where it should write its output to
//     // path should actually point at the folder where we want to store our generated output
//     // this path property here requires an absolute path to the place where the output file should be written to.
//     // This(__dirname) simply is the absolute path to this folder. This file(webpack.config.js) lives in and then we combine this with dist to tell webpage that this bundled JS file. So all are bundled code should be written to a dist folder inside of our project folder. That's in the end what we're saying here
//     path: path.resolve(__dirname),
//     filename: 'bundle.js',
//     publicPath: ''
//   },
//   // controls how source maps are generated which help us with debugging when we run our code in the browser so we can debug our original code. Rather then the bundled and optimized and transformed code.
//   // cheap-module-eval-source-map which is a certain way of generating quite good source maps.
//   devtool: 'cheap-module-eval-source-map',
//   module = {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         use: [
//           {loader: 'style-loader'},
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1,
//               modules: {
//                 localIdentName: '[name]__[local]__[hash:base64:5]'
//               }
//             }
//           },
//           {loader: 'postcss-loader', options: {
//             ident: 'postcss',
//             plugins: () => [autoprefixer()]
//           }}
//         ]
//       },
//       {
//         test: /\(png|jpe?g|gif)$/,
//         loader: 'url-loader?limit=8000&name=images/[name].[ext]'
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: __dirname + 'src/index.html',
//       filename: 'index.html',
//       inject: 'body'
//     })
//   ]
// }
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer()]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
