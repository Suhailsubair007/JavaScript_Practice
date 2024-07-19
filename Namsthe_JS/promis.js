// const GITHUB_USER = "https://github.com/Suhailsubair007"
// const user = fetch(GITHUB_USER);

// console.log(user);


// //
// // user.then(function(data){
// //     console.log(data);
// // });


const cart = ["pants","kurthas","phone"];

const promise = CreateOrder(cart);
console.log(promise);
promise.then(function(orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
})

function CreateOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId ="12345"; 
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
            
        }
    });
    return pr
    
}
function validateCart(cart){
    return true;
}