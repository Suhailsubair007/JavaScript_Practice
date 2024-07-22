const orginalArry = [1,2,3,4,5,3,2,1,6,7,8,6,5,9,10];
const freqency = {}

for(let i=0; i<orginalArry.length; i++)
{
    let element = orginalArry[i];
    if(freqency[element])
    {
        freqency[element]++;
    }else{
        freqency[element]=1;
    }
}
console.log(freqency);
