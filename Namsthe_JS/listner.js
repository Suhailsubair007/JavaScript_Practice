function listernEvent(){
    let count =0;
document.getElementById("tap").addEventListener("click",function(){
    console.log("Button clicked",++count);
    console.log("The button was clicked " +  count  + " times");
});
}

listernEvent();
