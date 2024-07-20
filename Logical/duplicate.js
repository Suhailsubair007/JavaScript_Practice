const arr = [1,2,3,1,2,3,6,7,8,4,5,9]
let i,j,count=0;
let isDuplicate = []

for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i] === arr[j])
        {
            isDuplicate.push(arr[i])
            count++;
            break;
        }
    }
}

console.log(`The total number of dupllicata are ${count}`);
console.log(`The duplicated elements are: ${isDuplicate}`);