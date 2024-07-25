// let b = 100;

// {
    
//     var a = 10;
//     let b = 20;
//     const c = 30;
    
    
//     console.log(a);
//     console.log(b);
//     console.log(c); 
// }
// console.log(a);
// console.log(b);
// console.log(c);






// var b = 20;
// {
//     var b = 10;
//     console.log(b);
// }
// console.log(b);






const p = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve("Hi i am resolved now!!")
    }, 5000);
  });
  
  
  async function getValue(){
    const newData = await p;
    console.log("Wait i will resolve now....");
  }
  
  getValue();