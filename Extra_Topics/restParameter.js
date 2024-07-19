function sum (...numbers){
    return numbers.reduce((acc,curr)=> acc+curr,0);
}
console.log(sum(1,2,3,4,5));
console.log(sum(11,23,45,65,32,12));