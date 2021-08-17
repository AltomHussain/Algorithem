//Binary Search using normal loops without recursion
const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (num === arr[mid]) {
       return arr[mid]
        }
        if (num > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return "Not found!";
    
}
console.log(binarySearch([1, 3, 5, 7, 8, 9, 10], 9));


//Binary search using recursion
function recursiveBinarySearch(n, arr) {
    let mid = Math.floor(arr.length / 2);
    let left = 0;
    let right = arr.length - 1;
    if (left >right) {
        return false;
    }
    if (n === arr[mid]) {
        return arr[mid];
    } else if (n < arr[mid]) {
        return recursiveBinarySearch(n, arr.slice(0, mid));
    } else if (n > arr[mid]) {
        return recursiveBinarySearch(n, arr.slice(mid));
    }
}
//console.log(recursiveBinarySearch(9,[1, 3, 5, 7, 8, 9, 10]));
