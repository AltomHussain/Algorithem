
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;

        }
    }
    return arr;
}
console.log(selectionSort([9,6,3]))