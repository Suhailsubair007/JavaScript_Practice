const array = [1,2,3,4,5,6,7,8,9,10]
let oddArry = []
let EvenArry = []

for(let i=0; i<array.length;i++)
{
    if(array[i]%2 === 0)
    {
        oddArry.push(array[i]);
    }
    else{
        EvenArry.push(array[i]);
    }
}

console.log(oddArry);
console.log(EvenArry);