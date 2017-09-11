    var express = require('express');
    var app = express();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    var clients = [];

    // var fs = require('fs');
    // eval(fs.readFileSync(__dirname + '/public/client.js'));

    app.get('/', function(req, res, next) {
    	res.sendFile(__dirname + '/public/index.html')
    });



    io.on('connect', function(client){
      clients.push(client)

      // console.log(client)

      client.on('disconnect', function() {
          clients.splice(clients.indexOf(client), 1);
      });
    });


    io.on('connection', function(socket){
      
      console.log('a user connected' + socket);
        io.emit('connected message', io.sockets.server.eio.clientsCount);
       // console.log(io.sockets.connected)

       // for(var i =0; i > is.sockets.connected.length; i++)


     socket.on('chat message', function(msg, username1){
        console.log('message: ' + msg);
        // var count = io.sockets.server.eio.clientsCount
          io.emit('chat message', msg, username1);
      });

      socket.on('disconnect', function(){
        console.log('user disconnected' + socket);
        io.emit('disconnected message' , io.sockets.server.eio.clientsCount, socket.id );
      });

    });

    app.use(express.static('public'));

    http.listen(3000, function(){
      console.log('listening on *:3000');
    });


    //http.listen(process.env.PORT || 5000);

 // });
    