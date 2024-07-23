//Write a program to delete an element at a specific position from an array.

const array = [1,2,3,4,5,6,7,8];
const position = 3;

if(position>=0 && position<array.length){
    for(let i = position; i<array.length-1; i++)
    {
        array[i] = array[i+1]
    }
    array.length = array.length-1;
}else{
    console.log("Invalid position !!!");
}

console.log(array);