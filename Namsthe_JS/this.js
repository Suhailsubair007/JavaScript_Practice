function getName(){
    console.log(this.name);
    console.log(this.age);
}


const person1 = {
    name : "suhail",
    age : 20,
    method:getName,
};

const person2 = {
    name : "Riswana",
    age : 27,
    method:getName,

};

person1.method();
person2.method();