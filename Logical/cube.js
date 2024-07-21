// const arr = [1,2,3,4,5,6,7]
// let newArr = []
// for(let i=0;i<arr.length;i++)
// {

//     newArr.push(arr[i]*arr[i]*arr[i])
// }


// console.log(newArr);


// const arr = [1,2,3,4,5,6,7]
// const newARR = arr.map((elements)=>{
//     return elements*elements*elements;
// })

// console.log(newARR);



const arr = [1,2,3,4,5,6,7]
const newARR =[]
arr.forEach((Element)=>{
    newARR.push(Element*Element*Element);
})
console.log(newARR);