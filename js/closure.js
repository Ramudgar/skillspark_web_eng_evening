// function outerFunction() {
//   let outerVariable = 10;
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction();
// }

// outerFunction();

// closure function
function createCounter() {
  let count = 0;
  function counter() {
    count++;
    return count;
  }

  return counter;
}

const increment= createCounter();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());





 
