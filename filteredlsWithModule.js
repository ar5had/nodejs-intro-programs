var mymodule = require('./mymodule')

function callback(err, filesName){
    if(err){
        console.log("Error happened while accesing the directory")
        return
    }
    else{
        filesName.forEach(function(elem){console.log(elem)})
    }
}

mymodule(process.argv[2], process.argv[3], callback);
