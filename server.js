var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if (parsedUrl.pathname == ('/listings')){
	  var read_stream = fs.createReadStream('listings.json');
	  read_stream.on('data', writeCallback);
	  read_stream.on('close', closeCallback);

    function writeCallback(data){
        response.write(data);
    }
    function closeCallback(){
        response.end();
    }
  }
  else {
	  response.writeHead(404, {'Content-Type': 'text/plain'});
	  response.write("Bad gateway error");
	  response.end();
  }
};
  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */

fs.readFile('listings.json', 'utf8', function(err, data) { //Reads Json File
	listingData = data; //Saves the listing Data to data
	server = http.createServer(requestHandler); //Start Server
	server.listen(8080);
	console.log("server listening on: http://localhost:8080")
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});