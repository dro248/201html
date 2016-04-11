var fs = require('fs');

var dir = process.argv[2],
ext = process.argv[3],
filter = RegExp('\\.' + ext + '$'),
result = [];

//console.log("dir: " + dir);
//console.log("ext: " + ext);

fs.readdir(dir, function(err, list){
  list.forEach(function (item){
    if(filter.test(item)){
      console.log(item);
    }
  })
});
