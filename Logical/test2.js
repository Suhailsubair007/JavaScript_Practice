let string = "suhail subair"
let uniqueString = new Set();

let chars = string.split('');

for(let i=0; i<chars.length; i++){
    uniqueString.add(chars[i]);
}

let uniqueStr = [...uniqueString].join();
console.log(uniqueStr);