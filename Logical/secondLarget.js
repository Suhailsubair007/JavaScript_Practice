const array = [12,43,67,77,32,41,114,90,11]

let larget = -Infinity
let secondLarge = -Infinity

for(let i=0; i<array.length; i++)
{
    if(array[i] > larget)
    {
        secondLarge = larget;
        larget =array[i];

    }else if(array[i]>secondLarge && array[i]<larget)
    {
        secondLarge = array[i];
    }
}

console.log(secondLarge);