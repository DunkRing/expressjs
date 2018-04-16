var http = require("http");

var myServer = http.createServer(function(request,response)
{
    response.writeHead(200, {"Content-Type" : "text/plain"});

    response.write("<h1>Roux Meetups</h1>");
    response.end();
});

myServer.listen(3000);