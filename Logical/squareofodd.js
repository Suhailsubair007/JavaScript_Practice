let arr = [1,2,3,4,5,6,7,8,9];
let resultArray = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2 !== 0){
        resultArray.push(arr[i] * arr[i])
    }
}

console.log(resultArray);