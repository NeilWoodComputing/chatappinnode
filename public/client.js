   // io.on('connection', function(socket){
   //    console.log('a user connected' + socket);
   //     io.emit('connected message' );

   //   socket.on('chat message', function(msg, username1){
   //      console.log('message: ' + msg);
   //      io.emit('chat message', msg, username1);
   //    });

   //    socket.on('disconnect', function(){
   //      console.log('user disconnected' + socket);
   //      io.emit('disconnected message');
   //    });

   //  });

   var username ="";

  $(function () {
    var socket = io();
    $('#chatbox').submit(function(){
      socket.emit('chat message', $('#m').val(), username);
      $('#m').val('');
      return false;
    });
    
    socket.on('chat message', function(msg, username1){
      var dt = new Date()
      var time = dt.getHours() + ":" + dt.getMinutes();
      $('#messages').append($('<li>').html(username1 + ": " + msg + " <span>" + time + "</span>"));
    });

    socket.on('connected message', function(count){ 
       $('#messages').append($('<li>').text("New user connected"));
       $(".connectedusers").html("Users online: " + count );
      console.log(socket)
    });

    socket.on('job', function(data){
     console.log(data)
    });

    socket.on('disconnected message', function(count, id){
       $('#messages').append($('<li>').text( "user disconnected"));
       $(".connectedusers").html("Users online: " + count );
        console.log(id)
    });

      // function Login2(){
      //   socket.emit('Logon');
      //   return false;
      // }
  });

function Login(){
  console.log("here");
  $(".login").removeClass("active");
  $(".messagebody").addClass("active");
  username = $("#username").val();
  // Login2();
  return false;
}

