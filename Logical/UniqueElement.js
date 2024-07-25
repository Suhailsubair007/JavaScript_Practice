const array = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 90, 34, 2, 1, 32, 54, 67];
let unique = [];
// let duplicate = []
let i, j, count;

for (i = 0; i < array.length; i++) {
    count = 0; // Reset count for each element
    for (j = 0; j < array.length; j++) {
        if (i !== j && array[i] === array[j]) {
            count++;
        }
    }
    if (count === 0) {
        unique.push(array[i]);
    }
}


console.log('Unique elements in the array are:', unique);
