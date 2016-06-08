var net = require('net');
var date = new Date();
var server = net.createServer(function(socket){
    var str = "";
    str = date.getFullYear() + "-" + (date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1) )  + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate() ) + " ";
    str += (date.getHours() < 10 ? "0" + date.getHours() : date.getHours() ) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() );
    socket.end(str);
}).on('error', function(){
    console.log("some error happened while creating server");
});
server.listen(process.argv[2]);
