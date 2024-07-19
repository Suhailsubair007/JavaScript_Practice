setTimeout(function(){
    console.log("Timer");
},5000);

function x(y){
    console.log("x");
    y();

}

x(function y(){
    console.log("Y");
});

console.log(typeof(x));