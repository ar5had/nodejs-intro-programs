var http = require('http');
http.get(process.argv[2], function(response){
    response.setEncoding("utf-8");
    response.on("data", function(data){console.log(data)})
    response.on("end", function(){})
}).on("error", function(){console.log("Some error happened while making get request!")})