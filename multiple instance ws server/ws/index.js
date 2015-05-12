'use strict';

var Socketio = require('socket.io');
var PORT = parseInt(process.argv[2], 10) || 9090;
var server = new Socketio(PORT, {
  'transports': ['polling']
});

var redis = require('socket.io-redis');
server.adapter(redis({ host: 'localhost', port: 6379 }));

var redis = require("redis"),
    redisClient = redis.createClient();
redisClient.on("error", function (err) {
	console.log("Error " + err);
});

var usersOnline = 0;
saveOnlineUsers(); //save 0 to redis, nobody online cause we just started!

server.on('connection', function(socket){
	incrementOnlineUsers();
	refreshOnlineUsers(function() {
		console.log('a user connected');
		server.emit('users online', {'users online': usersOnline});
		
		socket.on('disconnect', function(){
			decrementOnlineUsers();
			refreshOnlineUsers(function () {
				console.log('a user disconnected');
				server.emit('users online', {'users online': usersOnline});
			});
		});
	});
});

function refreshOnlineUsers(callback) {
	redisClient.get("socketio.onlineusers", function(err, reply) {
		if (!reply) usersOnline = 0;
		else usersOnline = parseInt(reply, 10);
		
		callback();
	});
}

function saveOnlineUsers() {
	redisClient.set("socketio.onlineusers", usersOnline);
}

function incrementOnlineUsers() {
	redisClient.incr("socketio.onlineusers", redis.print);
}

function decrementOnlineUsers() {
	redisClient.decr("socketio.onlineusers", redis.print);
}
