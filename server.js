let countUp,
    http = require( 'http' ),
    express = require('express'),
    bodyParser = require("body-parser"),
    jsonParse = bodyParser.json(),
    socket = require('socket.io')
    app = express(),
    count = 0,
    server = http.createServer(app);
    io = socket.listen(server)
    countUp = ()=>{
        count++;
        console.log(count)
        io.sockets.send(count)
    }

app.use( express.static( __dirname + '/build' ) );
app.get( '/', function ( request, response ) { 
    response.redirect( '/' );
}); 
app.post('/newchat',jsonParse,(req,res)=>{
  //jsonF.push({author:request.body.userName,msg:request.body.userMsg,date:new Date().toTimeString().substr(0,8)})
           
  let msg = {
    author:req.body.userName,
    msg:req.body.userMsg,
    data:new Date().toTimeString().substr(0,8)
    }
  io.send(JSON.stringify(msg))
  res.json(JSON.stringify(msg))
})
var port = process.env.PORT || 5000;
server.listen(port); 
console.log('Express-сервер прослушивает порт %d в режиме %s',
server.address().port, app.settings.env );