var prom = new Promise(function(resolve,reject){
    
    var drive = false;
    if(drive)
    {
        resolve("Yes");

    }
    else{
        reject("No");
    }

});

prom.then(function(resolve){
    console.log(resolve + "\t the user knows how to drive.")
}).catch(function(reject){
    console.log(reject + "\t the user does not know how to drive")
});
