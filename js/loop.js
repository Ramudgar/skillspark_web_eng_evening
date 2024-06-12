// // for (let i = 0; i <= 10; i+=2) {
// //   console.log(i);
// // }

// // let k=10;
// // while(k>=-20){
// //     if(k%2==0){
// //         console.log(k);
// //       }
// //   k--;
// // }

// // const n = 5;
// // let str = "";
// // for (let i = 1; i <= n; i++) {
// //   for (let j = 1; j <= n; j++) {
// //     if (j <= n - i) {
// //       str += "  ";
// //     } else {
// //       str += "* ";
// //     }
// //   }
// //   str += "\n";
// // }

// // console.log(str);

// // let n = 5;
// // let str = "";

// // for (let i = 1; i <= n; i++) {
// //   for (let j = 1; j <= n; j++) {
// //     if (j <= n - i) {
// //       str += "  ";
// //     } else {
// //       str += "* ";
// //     }
// //   }
// //   str += "\n";
// // }
// // console.log(str);

// // find the factorial of a number

// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// const names=["ram","shyam","hari","sita","gita"];
// for(let i=0;i<=names.length-1;i++){
//     console.log(names[i]);
// }

// const num=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for(let i=0;i<=num.length-1;i++){
//     sum= sum+num[i];
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++) {
//   let str = " ";

//   for (let j = 1; j <= i; j++) {
//     str += i;
//   }
//   console.log(str);
// }

const promise = new Promise((resolve, reject) => {
  const sum = 10;
  if (sum == 10) {
    resolve("Success");
  } else {
    reject("Error");
  }
});
promise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
