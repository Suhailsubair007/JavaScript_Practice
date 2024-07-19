function CreatePerson (name,age){
    return {
        name:name,
        age:age,
        greet:()=>{
            console.log(`Hi my name is${name} and i am ${age} years old`);
        }
    };
}

const person1 = CreatePerson('suhail',22);
const person2 = CreatePerson('Amal',25);

person1.greet();
person2.greet();    