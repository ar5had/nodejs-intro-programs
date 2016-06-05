var fs = require('fs');

var str = String(fs.readFileSync(process.argv[2]) );

str = str.split("");

var count = 0;

for(var i=0; i< str.length; i++){
	if(str[i] === '\n')
		count++;
}
console.log(count);
