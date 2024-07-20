console.log("start");

function getDataFromAPI(callback){
    setTimeout(()=>{
        callback("Suhail subair")
    },2000);
}




getDataFromAPI((value)=>{
    console.log(value);
});

console.log("End");
