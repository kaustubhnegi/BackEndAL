/*
function makeOrder(){

    console.log("Here is your Black Coffee . Enjoy your day");
}

// try catch block

try{
    makeOrder();
    ProcessOrder();
    

}
catch(error){
    console.log("Sorry an error occured in your program");
    console.log(error.name);
    console.log(error.message);
    console.log(error);  
}


//finally
// finally block is independent of try block and it will be executed anyway

finally{
    console.log("This block will execute no matter what!");
}
// throw keyword in javaScript

*/
var a = 9;


if(a<10){
        console.log("This is a customisable error");
   throw new Error("This is a customisable error    ");
}
else{
console.log("Working Fine");
}
