// function sum (...numbers){
//     return numbers.reduce((acc,curr)=> acc+curr,0);
// }
// console.log(sum(1,2,3,4,5));
// console.log(sum(11,23,45,65,32,12));



// function concatenate(separator, ...strings) {
//     return strings.join(separator);
//   }
  
//   console.log(concatenate(", ", "red", "green", "blue")); 
//   // Output: red, green, blue
  
//   console.log(concatenate(" - ", "JavaScript", "ES6", "Rest Parameters")); 
//   // Output: JavaScript - ES6 - Rest Parameters
  




function displayColors(primary, ...otherColors) {
    console.log(`Primary color: ${primary}`);
    console.log(`Other colors: ${otherColors.join(", ")}`);
  }
  
  displayColors("red", "green", "blue", "yellow");
  // Output:
  // Primary color: red
  // Other colors: green, blue, yellow
  