// const original = { name: 'Suhail', address: { city: 'Cochin', country: 'India' } };
// const shallowCopy = { ...original };

// shallowCopy.name = 'John'; // Changing primitive property
// shallowCopy.address.city = 'Mumbai'; // Changing nested object property

// console.log(original.name); // Output: Suhail (original unaffected by change in shallowCopy)
// console.log(original.address.city); // Output: Mumbai (nested object property affected by change in shallowCopy)
// console.log(original);




const original = { name: 'Suhail', address: { city: 'Cochin', country: 'India' } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.name = 'John'; // Changing primitive property
deepCopy.address.city = 'Mumbai'; // Changing nested object property

console.log(original.name);
console.log(deepCopy.name); // Output: Suhail (original unaffected by change in deepCopy)
console.log(original.address.city); // Output: Cochin (nested object property unaffected by change in deepCopy)
