var fs = require('fs'),
str,
myArray;


fs.readFile(process.argv[2], function(error, buffer){
  str = buffer.toString();
  myArray = str.split('\n');
  console.log(myArray.length-1);
});




