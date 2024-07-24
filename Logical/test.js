let string = "how are you";
let reversedWords = string.split(' ').map(word => word.split('').reverse().join('')).join(' ');
console.log(reversedWords); // Output: "woh era uoy"
