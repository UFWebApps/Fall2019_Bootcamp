var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function (request, response) {
    var parsedUrl = url.parse(request.url);

    /*
      Your request handler should send listingData in the JSON format as a response if a GET request 
      is sent to the '/listings' path. Otherwise, it should send a 404 error. 
      HINT: Explore the request object and its properties 
      HINT: Explore the response object and its properties
      https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
      http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
      
      HINT: Explore how callback's work 
      http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4
      
      HINT: Explore the list of MIME Types
      https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
     */
    
    // Test for the listings path and 'GET' method from the request
    // The URL is already parsed in the skeleton code provided
    if (parsedUrl.path === '/listings' && request.method === 'GET') {
        // Don't really need to, but send 'OK' header
        response.writeHead(200);
        // Send the JSON data to the web page
        response.write(JSON.stringify(listingData));
        // End the request
        response.end();
        
    } else {
        // Send the header for the error message
        response.writeHead(404);

        // End the response and send desired message
        response.end('Bad gateway error');
    }
    
};

fs.readFile('listings.json', 'utf8', function (err, data) {
            /*
              This callback function should save the data in the listingData variable, 
              then start the server. 
              
              HINT: Check out this resource on fs.readFile
              //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
              HINT: Read up on JSON parsing Node.js
             */

            //Check for errors
            if (err) throw err;

            //Save the sate in the listingData variable already defined
            
            // listingData is a global variable!!!
            listingData = JSON.parse(data);

            //Creates the server
            var server = http.createServer(requestHandler);


            //Start the server
            server.listen(port, function () {
                //Respond with port number
                console.log('Server listening on http://localhost:' + port);
            });

});