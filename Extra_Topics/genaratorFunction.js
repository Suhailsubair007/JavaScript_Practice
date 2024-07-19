// function* SimpleGenarator(){
//     yield 1
//     yield 2
//     yield 3
// }

// const genaratorObj = SimpleGenarator()
// const genaratorObj2 = SimpleGenarator()

// console.log( genaratorObj.next());
// console.log( genaratorObj.next());
// console.log( genaratorObj2.next());
// console.log( genaratorObj2.next());
// console.log( genaratorObj.next());
// console.log( genaratorObj.next());



//Genarate infinit loop

function* genarateId(){
    let id = 1;
    while(true)
    {
        yield id
        id++
    }
}
const obj = genarateId()
const obj1 = genarateId()
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj1.next())
console.log(obj1.next())
console.log(obj.next())
