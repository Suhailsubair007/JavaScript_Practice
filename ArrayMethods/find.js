const person = 
[
    {
        name: "suhail",
        age:20,
    },
    {
        name: "sam",
        age:22,
    },
    {
        name: "amal",
        age:24,
    },
    {
        name: "naseeb",
        age:25,
    }

];

// let found = person.find((item)=>{
//     return item.name === 'naseeb';
// });
// console.log(found);


// let found = person.find((item)=>{
//     return item.name === 'naseebaaajkshjhj';
// });
// console.log(found);

let found = person.find((item)=>{
    return item.age < 25;
});
console.log(found);

// let found = person.find((item)=>{
//     return item.age <25;
// });
// console.log(found);