const ExtractTextPlugin = require("extract-text-webpack-plugin");
var static = require('node-static');


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
          presets: ['react']
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
  ]
};

var file = new static.Server('./build');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        
        //Serve files! 
        
        file.serve(request, response);
    }).resume();
}).listen(5000);