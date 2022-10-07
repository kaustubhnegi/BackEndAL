

// CallBack functions

// const students=[{name:"Alice",subject:"Database"},{name:"Bob",subject:"Networks"}];

// function one()
// {
//     setTimeout(function(){
//     console.log("Function 1");
//         two();
//     },3000);
// }

// function two()
// {
//     console.log("Function 2");
// };

// // function three()
// // {
// //     console.log("Function 3");
// // };

// one();
// // two();
// // three();

function person1(friend, person2){
    setTimeout(function(){
    console.log("My friend's name is "+ friend);
    person2();},10000);
}


function person2(){
    console.log("My name is Alice");
}

person1("kartik", person2);
// person2();

