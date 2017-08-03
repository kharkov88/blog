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

var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();

var jsonParse = bodyParser.json();
var filePath = 'build/contents/history.json'

// app.use(express.static(__dirname + "/build"));
// app.post("/register", jsonParse, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body.userName)
//     let jsonF=[{},{}]
//     fs.readFile(filePath,'utf-8',(error,data)=>{
//         if(error)console.log('error:',error)
//         else if(request.body.userMsg!=''){
//             jsonF=JSON.parse(data)
//             jsonF.push({author:request.body.userName,msg:request.body.userMsg,date:new Date().toTimeString().substr(0,8)})
//             fs.writeFile(filePath,JSON.stringify(jsonF))
//             console.log(jsonF)
//             response.json(JSON.stringify(jsonF));
//         }
//      })
    
// });
// app.listen(3060);