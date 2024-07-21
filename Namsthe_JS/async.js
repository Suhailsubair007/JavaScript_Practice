async function getName(){
    return fetch("https://www.youtube.com/watch?v=UnSZjq2i40g");    
}

let p1 = getName();
p1.then((data)=>{
    console.log(data); 
})