// // function Computer(cname) {
// //     console.log('Hello ' + cname + '!');
// // }

// // function greet(name,callback ) {
// //     callback(name);

// //     }

// //     greet("Ram",Computer)

// function add(c, d) {
//   let add = c + d;
//   console.log(add);
// }

// function subtract(a, b, addition) {
//   addition;
//   return a - b;
// }

// let result = subtract(10, 5, add(5, 5));
// console.log(result);

function greet(name, caste) {
  console.log("Hello " + name + " "+caste + "!");
}

function lastName( callback) {
  callback("Ram", "Yadav");
}

lastName( greet);



