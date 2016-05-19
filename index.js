var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	socket.on('chat', function(msg) {
		console.log('Received: ', msg);
		io.emit('chat', msg);
	});
});

http.listen(3131, function(){
	console.log('listening on *:3131');
});
