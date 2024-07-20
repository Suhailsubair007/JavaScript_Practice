// const array = [11,55,12,45,87,43,90,111,3];
// let largest = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (array[i] > largest) {
//     largest = array[i];
//   }
// }

// console.log(`The largest element in the array is: ${largest}`);



const array = [11,55,12,45,87,43,90,111,3];
let smallest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i];
  }
}

console.log(`The largest element in the array is: ${smallest}`);
