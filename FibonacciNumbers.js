//Normarl Fibonacci sequence
const fibonacciOne = (num) => {
    let feb = [0, 1];
    for (let i = 2; i <= num; i++){
        feb.push(feb[i-1]+ feb[i-2])
    }
    return feb[num]
 
}
//fibonacciOne(10);

//Find nth number Fibonacci using recursion
const fibonacciTwo = (num) => {

    if (num <2) {
        return num;
    }
    return fibonacciTwo(num - 1) + fibonacciTwo(num - 2);
 

}
console.log(fibonacciTwo(10));