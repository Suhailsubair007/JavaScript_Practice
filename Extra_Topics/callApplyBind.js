// let name = {
//     firstName : "Suhail",
//     lastName : "Subair",
//     printFullName: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// name.printFullName();

// let name2 = {
//     firstName : "Aidan",
//     lastName : "Muhammed",
    
// }


// //function borrowing 

// name.printFullName.call(name2)

//////////////////////////////////////////////
let name = {
    firstName : "Suhail",
    lastName : "Subair",
    
}

let name2 = {
    firstName:"Aidan",
    lastName:"Muhammad"
}

let printFullName = function(hometown,state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state );
}

printFullName.call(name,"Kochi","Kerala");
printFullName.call(name2,"Dubai","UAE");
printFullName.apply(name2,["Dubai","UAE"]);

//bIND

let printMyname = printFullName.bind(name,"Kochi","Kerala");
console.log(printMyname);
printMyname();