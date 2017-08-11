let 
    http = require( 'http' ),
    express = require('express'),
    bodyParser = require("body-parser"),
    jsonParse = bodyParser.json(),
    socket = require('socket.io')
    app = express(),
    count = 0,
    ppls_list = [],
    server = http.createServer(app);
    io = socket.listen(server);


app.use( express.static( __dirname + '/build' ) );
app.get( '/', function ( request, response ) { 
    response.redirect( '/' );
}); 
app.post('/newchat',jsonParse,(req,res)=>{       
  let msg = {
    action:'add_msg',
    author:req.body.userName,
    msg:req.body.userMsg,
    data:new Date().toTimeString().substr(0,8)
    }
  io.send(JSON.stringify(msg))
  res.json(JSON.stringify(msg))
})
app.post('/autorization',jsonParse,(req,res)=>{
    count++;
    ppls_list.push({name:req.body.name,_id:`id_0${count}`})
    res.json(JSON.stringify({user:{name:req.body.name,_id:`id_0${count}`},people:ppls_list}))
    io.send(JSON.stringify({action:'update_ppl',_id:`id_0${count}`,people:ppls_list}))
})
app.post('/logout',jsonParse,(req,res)=>{
    let find_user;
    ppls_list.map((item,index)=>{
        if(item._id==req.body.id)find_user=index
        })
    ppls_list.splice(find_user,1)
    res.json(JSON.stringify({__id:find_user}))
    io.send(JSON.stringify({action:'update_ppl',_id:`id_0${count}`,people:ppls_list}))
})
var port = process.env.PORT || 5000;
server.listen(port); 
console.log('Express-сервер прослушивает порт %d в режиме %s',
server.address().port, app.settings.env );