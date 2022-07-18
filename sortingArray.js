//sort an array using sort method
const sortOne = (array) => {
    return array.sort((a, b) => a - b);
}
//console.log(sortOne([8, 7, 9, 6, 5, 3, 2, 10, 9, 5]));
//sort an array using bubble sort algorith
const sortTwo = (array) => {
    for (let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length; i++){
        if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }}
    return array;
}
//console.log(sortTwo([9, 6, 7, 4, 6, 1, 8, 50]));


/**
 * hello people
 */