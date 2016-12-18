var http = require('http');
var server = http.createServer();
var host = '127.0.0.1';
var port = 1234;

server.listen(port, host, function(){
    console.log('Listening at ' + host + ':' + port);
});
