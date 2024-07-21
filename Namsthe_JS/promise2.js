
//How to create a promise in simple way

let myPromise = new Promise((resolve,reject)=>
{
    if(!true)
    {
        resolve("Sussesfull!!!!!!")
    }else {
        reject("OOMBI");
    }
});

myPromise.then((message)=>{
    console.log(message);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});