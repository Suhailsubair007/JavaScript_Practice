// async function getName(){
//     return fetch("https://www.youtube.com/watch?v=UnSZjq2i40g");    
// }

// const { reject, log } = require("async");

// let p1 = getName();
// p1.then((data)=>{
//     console.log(data); 
// })





// const p =new Promise((resolve,reject)=>{
//     resolve("Promise resolved succefuly");
// });

// async function getData(){
//     const val = await p;
//     console.log(val);
// }
// getData();




const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise is resolved!!");
    },4000);
});


// without async await

function getValue(){
    p.then((data)=> console.log(data));
    console.log("Hi suhail ");
}
getValue();


//With async await
// async function getValue(){
//     const newData = await p;
//     console.log(newData);
    
// }
// getValue();
// console.log("Hi suhail your promise is still in progress wait a minuit..");


// function getData (){
//     p.then((res)=>console.log(res));

//     console.log("Hi suhail..");
// }

// getData();