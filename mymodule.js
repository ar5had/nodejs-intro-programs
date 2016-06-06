module.exports = function(directory, ext, callback){
    var fs = require('fs')
    fs.readdir(directory, function(err, data){
        if(err)
            return callback(err);
        else{
            var files = [];
            data.forEach(function(elem){
                if(elem.substring(elem.length - ext.length - 1) === "." + ext)
                    files.push(elem);
            });
            return callback(null, files);
        }
    });
};