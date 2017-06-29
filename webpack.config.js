const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); //for Webpack 2, using node's path library to create absolute path in output.path config
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
//Node doesn't support ES6 import/export yet so
//commonJS is used.

//NODE_ENV is set whenever the prod script is run. If the prod script is not run it is undefined.
console.log(process.env.NODE_ENV);
const isProdEnv = process.env.NODE_ENV === "production";
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
});
const cssConfig = isProdEnv ? cssProd : cssDev;
const lessDev = ['style-loader', 'css-loader', 'less-loader'];
const lessProd = ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'less-loader'],
    publicPath: '/dist'
});
const lessConfig = isProdEnv ? lessProd : lessDev;


module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    publicPath: '/dist'
  },
  devServer:{
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 8000,
      open: true,
      stats: "errors-only",
      hot: true,
      historyApiFallback: true
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'React Shopping Tracker',
        minify: {
          collapseWhitespace: true
        },
        // hash: true,
        template: './src/template.html',
        filename: 'index.html'
      }
    ),
    new ExtractTextWebpackPlugin({
      filename: 'css/[name].css',
      disable: !isProdEnv,
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    alias: {
        semantic: path.resolve(__dirname, 'semantic/src/'),
        jquery: path.resolve(__dirname, 'node_modules/jquery/src/jquery')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.less$/,
        use: lessConfig
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=[name].[ext]&outputPath=images/'
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  }
};
