var http = require('http');
http.get(process.argv[2] ,function(response){
    var lines = [];
    response.setEncoding('utf-8')
    response.on('data', function(data){
        lines.push(data);
    });
    response.on('end', function(){
        console.log(lines.join("").length);
        console.log(lines.join(""));
    });
    
}).on('error', function(){
    console.log("some error happened while making get request");
});
