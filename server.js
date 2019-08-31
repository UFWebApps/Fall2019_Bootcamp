var http = require('http'),
        fs = require('fs'),
        url = require('url'),
        port = 8080;

var listingData, server;

var requestHandler = function(request, response) {
        var parsedUrl = url.parse(request.url);

        // checking if request is GET and is for listings
        if(request.method === 'GET' && parsedUrl.pathname === '/listings')
        {
                // all good so code is 200 and sending listingData
                response.statusCode = 200;
                response.write(listingData);
        }
        else
        {
                // not all good so it is a 404 and bad gateway
                response.statusCode = 404;
                response.write("Bad gateway error");
        }

        response.end();
};

fs.readFile('listings.json', 'utf8', function(err, data) {
        // accounting for err and saving data to listingData
        if (err) throw err;
        listingData = data;

        // server created
        server = http.createServer(requestHandler);

        // server started and listening for requests
        server.listen(port, function(){
                console.log('Server listening on: http://localhost:' + port);
        });
});
