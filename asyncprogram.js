var fs = require('fs');
fs.readFile(process.argv[2], function callback(err, data){
		//not used 'utf-8' as second param of the readFile method so we will get buffer object instead of a string
		data = data.toString();// as data is a buffer object.	
		data = data.split("");
		var sum = 0;
		for(var i = 0; i < data.length; i++){

			if(data[i] === '\n')
				sum++;
		}
		console.log(sum);
});

