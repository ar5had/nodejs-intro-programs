var fs = require('fs');
var http = require('http');
var portNo = process.argv[2];
var fileLoc = process.argv[3];
var server = http.createServer(function(req, res){
   var src = fs.createReadStream(fileLoc);
   src.pipe(res);
   src.on('error', function(){
      console.log("Some error happened while reading stream from http server response"); 
   });
});
server.listen(portNo);