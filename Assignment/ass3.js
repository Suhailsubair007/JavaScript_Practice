const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the principal amount: ", (P) => {
    rl.question("Enter the interest rate: ", (R) => {
        rl.question("Enter the number of years: ", (n) => {
            let principal = parseFloat(P);
            let rate = parseFloat(R);
            let years = parseFloat(n);
            
            if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
                console.log("Invalid input. Please enter numerical values.");
            } else {
                let SI = (principal * rate * years) / 100;
                console.log("The simple interest is: " + SI);
            }
            
            rl.close();
        });
    });
});
