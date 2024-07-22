// console.log("STARTED");
// getValue(); 
// console.log("END");

// // async function getValue(){
// //   const value =  fetch("https://www.youtube.com/watch?v=UnSZjq2i40g").then((data)=>{
// //         console.log(value);
// //     })
// // } 

// async function getValue(){
//    const value = await fetch("https://www.youtube.com/watch?v=UnSZjq2i40g");
// } 



const p = new Promise((resolve,reject)=>{
   resolve("Hi i am resolved promise!!!!");
})