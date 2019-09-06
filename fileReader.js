var http = require('http');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    var read_stream = fileSystem.createReadStream('myfile.txt');
    read_stream.on('data', writeCallback);
    read_stream.on('close', closeCallback);

    function writeCallback(data){
        response.write(data);
    }

    function closeCallback(){
        response.end();
    }

}).listen(8080);

console.log('Server started');