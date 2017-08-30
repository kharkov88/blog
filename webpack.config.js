const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports={
    entry:'./front/index.js',
    output:{
        path: __dirname + '/build',
        filename:"bundle.js",
        library:'myApp'
    },
      watch: true,
      watchOptions:{
        aggregateTime:100
      },
module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //    NODE_ENV: '"production"',
    //   },
    //   __DEVELOPMENT__: false,
    // }),
    new ExtractTextPlugin("css/style.css"),
    // new UglifyJSPlugin({
    //   compress:{
    //     warnings:false
    //   }
    // })
  ]
};
