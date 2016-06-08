var http = require('http');
var map = require('through2-map');
var fs = require('fs');
var server = http.createServer(function(req, res){
    if(req.method == 'POST'){
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
}).on('error', function(){ console.log("some error happened while making http server!") });

server.listen(process.argv[2]);