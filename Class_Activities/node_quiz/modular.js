var dir = process.argv[2],
ext = process.argv[3];

require('./filterdir')(dir, ext, function(err, data) {
  data.forEach(function (item) {
    console.log(item);
  })
});
