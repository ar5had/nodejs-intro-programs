var http = require('http');
var lines = [];
var urlpos = 2;

function collectData(url){
    http.get(url,function(response){
           var str = "";
           response.setEncoding('utf-8');
           response.on('data', function(data){
              
                  str += data;
               
           }); 
           response.on("end", function(){
               lines.push(str);
               if(urlpos < process.argv.length - 1){
                   urlpos++;
                   collectData(process.argv[urlpos]);
               }
               else{
                   lines.forEach(function(elem){
                      console.log(elem); 
                   });
               }
           });
    }).on('error', function(){
        console.log("some error happened while making get request");
    });
}

collectData(process.argv[urlpos]);