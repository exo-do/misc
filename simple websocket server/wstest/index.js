'use strict';

var io = require('socket.io')(8080);

var usersOnline = 0;

io.on('connection', function(socket){
	usersOnline++;
	console.log('a user connected');
	io.emit('users online', {'users online': usersOnline});
	
	socket.on('disconnect', function(){
		usersOnline--;
		console.log('a user disconnected');
		io.emit('users online', {'users online': usersOnline});
	});
});