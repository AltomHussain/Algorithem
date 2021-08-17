//lienear search with numbers
const linearSearch = (num) => {
    let numArray = [2, 4, 6, 5, 8, 2, 9];
    let newNum = 0;
    for (let i = 0; i < numArray.length; i++){
        if (numArray[i] == num) {
            newNum = numArray[i];
        } 
        
    }
                console.log(newNum);
}
linearSearch(5)
//console.log();
//Linear search with strings