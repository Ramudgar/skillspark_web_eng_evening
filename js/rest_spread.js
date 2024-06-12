const arr=[1,2,3,4,5];
// const first=arr[0];
const rest=arr.slice(1);
// console.log(first);
console.log(rest);

const arr2=[1,2,3,4,5];
const[first,...rest2]=arr2;
console.log(first);
console.log(rest2);