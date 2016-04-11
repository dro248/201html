var total = 0;
for(var i in process.argv){
  if(i > 1){  
//    console.log(process.argv[i]);
    total = total + Number(process.argv[i]);
//    console.log("total: " + total);
  }
}

// console.log("done");
console.log(total);
