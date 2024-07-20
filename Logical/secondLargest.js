function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for a second largest
    }

    let first = -Infinity;
    let second = -Infinity;

    // Find the largest value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            first = arr[i];
        }
    }

    // Find the second largest value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    return second;
}

// Example usage
const array = [10, 5, 8, 12, 7, 6];
const secondLargest = findSecondLargest(array);
console.log("Second largest element is:", secondLargest);
