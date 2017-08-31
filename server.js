    var express = require('express');
    var app = express();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    // var fs = require('fs');
    // eval(fs.readFileSync(__dirname + '/public/client.js'));

    app.get('/', function(req, res, next) {
    	res.sendFile(__dirname + '/public/index.html')
    });

    io.on('connection', function(socket){
      console.log('a user connected' + socket);
       // io.emit('connected message', socket.id);
       console.log(io.sockets.connected)

       // for(var i =0; i > is.sockets.connected.length; i++)


     socket.on('chat message', function(msg, username1){
        console.log('message: ' + msg);
          io.emit('chat message', msg, username1);
      });

      socket.on('disconnect', function(){
        console.log('user disconnected' + socket);
        io.emit('disconnected message');
      });

    });

    app.use(express.static('public'));

    http.listen(3000, function(){
      console.log('listening on *:3000');
    });

 // });
    