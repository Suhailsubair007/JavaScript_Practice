

function isPowerOfTwo(n){
    if(n<=0)
        {
            return false
        }
        while(n>1){
            if(n%2 !== 0)
            {
                return false
            }
        
            n = n/2

            return true
        }
        
}


let n = 88;
console.log(isPowerOfTwo(n));