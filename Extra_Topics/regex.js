// let regex = /cat/;
// let string = "The cat sat on the mat.";
// console.log(regex.test(string)); // true


// let regex = /c.t/;
// let string = "The cat sat on the mat.";
// console.log(regex.test(string)); // true (matches 'cat')

// let regex = /ca+t/;
// let string = "The caat sat on the mat.";
// console.log(regex.test(string)); // true (matches 'caat')


//exec()

let regex = /world/;
let string = "hello world";
let result = regex.exec(string);

console.log(result); // ["hello"]
