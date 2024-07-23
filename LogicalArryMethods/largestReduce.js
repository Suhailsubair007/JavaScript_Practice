const numbers = [2,6,8,9,1,5,3]
const larget = numbers.reduce((max,curr)=>{
    if(curr>max){
        return curr
    }else{
        return max
    }
},numbers[0]);
console.log(larget);



// (curr > max ? curr : max)