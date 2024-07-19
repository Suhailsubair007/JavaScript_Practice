const arr = [3, 7, 1, 2, 6, 7, 9];
const sortedArry = [];
let temp, i, j;

// Bubble sort logic to sort the array in ascending order
for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) { //by changin > < ascending or descending
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

// Push the sorted elements into the sortedArry
for (i = 0; i < arr.length; i++) {
    sortedArry.push(arr[i]);
}

console.log(sortedArry);
