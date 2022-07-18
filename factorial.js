//1. Normal way to find factorial of a number
function factorial(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  console.log(fact);
}
factorial(5);

function factorialRecursion(num) {
  if (num == 0 || num == 1) {
    console.log(num);
    return num;
  }
  return num * factorialRecursion(num - 1);
}
factorialRecursion(5);

///This is my factorial algorithem

//Another line on testing
