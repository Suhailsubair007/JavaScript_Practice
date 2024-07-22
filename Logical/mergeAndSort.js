const array1 = [4,7,2,8]
const array2 = [1,9,6,10]
const sorted =[];

const array3 = [...array1,...array2]
console.log(array3);

for(let i=0;i<array3.length-1;i++){
    for(let j=i+1;j<array3.length;j++)
    {
        if(array3[i] < array3[j])
        {
            let temp = array3[i];
            array3[i] = array3[j];
            array3[j] = temp;
        }
    }
}
for (i = 0; i < array3.length; i++) {
    sorted.push(array3[i]);
}

console.log(sorted);