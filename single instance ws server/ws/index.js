'use strict';

var Socketio = require('socket.io');
var server = new Socketio(9090, {
  'transports': ['polling']
});

var usersOnline = 0;

server.on('connection', function(socket){
	usersOnline++;
	console.log('a user connected');
	server.emit('users online', {'users online': usersOnline});
	
	socket.on('disconnect', function(){
		usersOnline--;
		console.log('a user disconnected');
		server.emit('users online', {'users online': usersOnline});
	});
});
