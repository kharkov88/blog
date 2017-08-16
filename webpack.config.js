const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports={
    entry:'./front/index.js',
    output:{
        filename:"./build/bundle.js",
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
    new ExtractTextPlugin("build/css/style.css"),
    new UglifyJSPlugin("build/bundle.js")
  ]
};
