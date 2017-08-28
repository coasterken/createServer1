//http is built into node
var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;


function handleRequestGood(request, response) {

    response.end("It works! You are SO GOOD!  Path hit: " + request.url);       

}

function handleRequestBad(request, response) {

    response.end("It works! You are SO LOST!  Path hit: " + request.url);

}

// http from required package
var server1 = http.createServer(handleRequestGood);

// http from required package
var server2 = http.createServer(handleRequestBad);

//listeners
server1.listen(PORT1, function () {
    console.log("Server1 listening on http://localhost:%s", PORT1);
});

server2.listen(PORT2, function () {
    console.log("Server2 listening on http://localhost:%s", PORT2);
});