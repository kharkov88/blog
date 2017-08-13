let 
    http = require( 'http' ),
    express = require('express'),
    bodyParser = require("body-parser"),
    jsonParse = bodyParser.json(),
	socket = require('socket.io'),
	fs =require('fs'),
    app = express(),
    count = 0,
    ppls_list = [],
    server = http.createServer(app);
    io = socket.listen(server);


app.use( express.static( __dirname + '/build' ) );
app.get( '*', function ( request, response ) { 
    response.redirect( '/' );
}); 
app.post('/newchat', jsonParse, (req, res) => {
	let msg = {
		action: 'add_msg',
		author: req.body.userName,
		frendy:req.body.frendName,
		msg: req.body.userMsg,
		data: new Date().toTimeString().substr(0, 8)
	},
		file = 'data/history.json';
	fs.readFile(file,'utf-8',(err,data)=>{
		let arr = JSON.parse(data)
		arr.push(msg)
		fs.writeFile(file,JSON.stringify(arr))
	})
	io.send(JSON.stringify(msg))
	res.json(JSON.stringify(msg))
})
app.post('/autorization', jsonParse, (req, res) => {
	let file = "data/people.json"
	count++;
	fs.readFile(file,'utf-8',(err,data)=>{
		let arr = JSON.parse(data)
		arr.push({
			name: req.body.name,
			_id: `id_0${count}`
		})
		fs.writeFile(file,JSON.stringify(arr))
		res.json(JSON.stringify({
			user: {
				name: req.body.name,
				_id: `id_0${count}`
			},
			people: arr
		}))
	})

	io.send(JSON.stringify({
		action: 'update_ppl',
		_id: `id_0${count}`,
		people: ppls_list
	}))
})
app.post('/logout', jsonParse, (req, res) => {
	let find_user,file,id;
	file = 'data/people.json'
	fs.readFile(file,'utf-8',(err,data)=>{
		let arr = JSON.parse(data)
		arr.map((item, index) => {
			if (item._id == req.body.id) {
				find_user = index;
				id = item._id
			}
		})
		arr.splice(find_user,1)
		fs.writeFile(file,JSON.stringify(arr))
		res.json(JSON.stringify({
			__id: find_user
		}))
		io.send(JSON.stringify({
			action: 'update_ppl',
			_id: id,
			people: arr
		}))
	})
	// ppls_list.map((item, index) => {
	// 	if (item._id == req.body.id) {
	// 		find_user = index;
	// 		id = item._id
	// 	}
	// })
	// ppls_list.splice(find_user, 1)
})
app.post('/newcomment',jsonParse,(req,res)=>{
	let file='data/comments.json'
	fs.readFile(file,'utf-8',(error,data)=>{
		if(error)console.log('error:',error)
		else{
			let obj = JSON.parse(data)
			obj.push({
				author:req.body.author,
				comment:req.body.comment,
				date:String(new Date()).substr(4,20)})
			fs.writeFile(file,JSON.stringify(obj))
			console.log(obj)
			res.json(JSON.stringify(obj))
		}
	})
})
app.post('/basecomment',(req,res)=>{
	let file = 'data/comments.json'
	fs.readFile(file,'utf-8',(er,data)=>{
		res.json(data)
	})
	
})
app.post('/chathistory',(req,res)=>{
	let file = 'data/history.json'
	fs.readFile(file,'utf-8',(err,data)=>{
		res.json(data)
	})
})
let port = process.env.PORT || 5000;
server.listen(port);
console.log('Express-сервер прослушивает порт %d в режиме %s',
	        server.address().port, app.settings.env);