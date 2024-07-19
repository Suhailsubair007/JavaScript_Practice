const person1 = {
    name: "suhail",
    age:22,
};

const person2 = person1;
person2.age = person1.age + 1;

console.log(person1.age);
console.log(person2.age);