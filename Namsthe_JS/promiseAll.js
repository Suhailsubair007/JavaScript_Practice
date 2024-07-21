const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 SUCESS!!!"),3000);
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P2 FAIL!!!!!"),1000);
    // setTimeout(()=>resolve("P2 SUCESS!!!"),1000);
});
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 SUCESS!!!"),2000);
});

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});