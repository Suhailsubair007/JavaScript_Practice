const list = [1, 4, 5, 6, 7, 3, 9, 11, 55, 32, 45, 78, 99, 12, 15, 17, 91, 71];
let primeNumbers = [];


function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <=num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Iterate through the array
for (let i = 0; i < list.length; i++) {
    if (isPrime(list[i])) {
        primeNumbers.push(list[i]);
    }
}

// Print the prime numbers array
console.log(primeNumbers);

