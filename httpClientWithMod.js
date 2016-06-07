var http = require('http');
var bl = require('bl');
http.get(process.argv[2] ,function(response){
    response.pipe(bl(function(err, data){
        if(!err){
        data = data.toString();
        console.log(data.length);
        console.log(data);
        }
    }));
    
}).on('error', function(){
    console.log("some error happened while making get request");
});
