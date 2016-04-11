var fs = require("fs");

//console.log(process.argv[2]);

var str = fs.readFileSync(process.argv[2]).toString();
//console.log(str);

var myArray = str.split('\n');

console.log(myArray.length-1);
