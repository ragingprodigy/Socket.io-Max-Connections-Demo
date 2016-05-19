var async = require('async');

var count = 0;

async.whilst(
    function () { return count < 200; },
    function (callback) {
        var socket = require('socket.io-client')('http://localhost:3131', {
		'force new connection': true
	});

        socket.on('connect', function(){
            count++;
            console.log('connections: ' + count);
	    socket.emit('chat', 'Hello from '+count);
            callback();
        });

	socket.on('chat', function(m){ console.log('Server sent back: ', m);  });

    },
    function (err) {
        console.log('DONE');
    }
);
