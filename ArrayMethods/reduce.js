// const numbers = [1,2,3,4,5,6,7,8]
// const output = numbers.reduce((acc,curr)=>{
    
//     return acc +  curr;
// },0);
// console.log(output);


// product of the array 
// const numbers = [1,3,5,7,9]
// const output = numbers.reduce((acc,curr) =>{
//     return  acc * curr;
// },1);
// console.log(output);



// const numbers = [1,3,5,7,9]
// const output = numbers.reduce((acc,curr) =>{
//     if( curr > acc ){
//     return curr
//    }else{
//     return acc
//    }
// },numbers[0]);
// console.log(output);





function countOccurrences(arr) {

    return arr.reduce((accumulator, currentValue) => {
      // If the current value is already a key in the accumulator, increment its value
      // Otherwise, initialize it to 1
      if (accumulator[currentValue]) {
        accumulator[currentValue]++;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {}); 
  }
  
  // Example:
  console.log(countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));
  // Output: { apple: 3, banana: 2, orange: 1 }
  


const str=["Abc","cba"]
const output = str.sort((a,b)=>{
    return b-a
})
console.log(output);