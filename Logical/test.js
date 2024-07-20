const list = [1, 4, 5, 6, 7, 3, 9, 11, 55, 32, 45, 78, 99, 12, 15, 17, 91, 71];
let primeNunbers = []

function isPrime(num){
    if(num<=1) return false
    for(i=2;i<=num/2;i++)
    {
        if(num%i === 0)
        {
            return false
        }
    }
    return true
}


for(let i=0; i<list.length;i++)
{
    if(isPrime(list[i]))
    {
        primeNunbers.push(list[i]);
    }    
}

primeNunbers.sort((a,b)=>b-a)
console.log(primeNunbers);