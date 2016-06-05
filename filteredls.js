var fs = require('fs')

var ext = process.argv[3];

fs.readdir(process.argv[2], function callback(err, list){
	if(err)
		console.log("Error happened while accesing file path")
	else{
		for(var file in list){
		
			if(list[file].substring(list[file].length - ext.length - 1) === ("." + ext))
				console.log(list[file])
		}
	}
})
