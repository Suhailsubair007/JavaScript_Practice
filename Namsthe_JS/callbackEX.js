function displayMessage(){
    console.log("Hi i am call back!!!!");
}


function showMessage(callback){
    setTimeout(()=>{
        callback();
    },2000);
}

showMessage(displayMessage);