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
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      }
    ]
  }
};

var static = require('node-static');
var file = new static.Server();
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        
        //Serve files! 
        
        file.serve(request, response);
    }).resume();
}).listen(5000);