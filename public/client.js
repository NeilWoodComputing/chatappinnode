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

   var username ="dave";

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

    socket.on('connected message', function(data, socket){
       $('#messages').append($('<li>').text("New user connected"));
      console.log(socket)
    });

    socket.on('disconnected message', function(data){
       $('#messages').append($('<li>').text( "disconnected"));
       // console.log(data)
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

