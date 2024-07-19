// const person = 
// [
//     {
//         name: "suhail",
//         age:20,
//     },
//     {
//         name: "sam",
//         age:22,
//     },
//     {
//         name: "amal",
//         age:24,
//     },
//     {
//         name: "naseeb",
//         age:25,
//     }

// ];



// let found = person.filter((item)=>{
//     return item.age <25;
// });
// console.log(found);



// let found = person.filter((item,index)=>{
//     return index <2;
// });
// console.log(found);





//Filter out  the odd numbers from the array 
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const output = numbers.filter((x)=> {
//     return x%2
// })
// console.log(output);





// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const output = numbers.filter((x)=> {
//     return x%5===0
// })
// console.log(output);



// const users = [
//     { id: 1, name: 'Alice', status: 'active' },
//     { id: 2, name: 'Bob', status: 'inactive' },
//     { id: 3, name: 'Charlie', status: 'active' },
//     { id: 4, name: 'David', status: 'inactive' }
//   ];
  
//   const activeUsers = users.filter((user) => user.status==='active');
//   console.log(activeUsers);

  





// const mixedArray = [1, "hello", true, "world", 42, false];
// const newArray = mixedArray.filter((elements)=> typeof elements === 'string');

// console.log(newArray);







// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
