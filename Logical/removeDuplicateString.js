let string = "Helloworld"
let uniqueString = new Set();
let duplicateElements = new Set();

let chars = string.split('');

for(let i=0; i<string.length; i++){
  if(uniqueString.has(string[i])){
    duplicateElements.add(string[i]);
}else
uniqueString.add(string[i]);
}

let uniqueStr = [...uniqueString].join();
console.log(uniqueStr);
console.log(duplicateElements);