//  if(conditions){
//     // do something
// }
// else if( oncancel){

// }
// else if(csdf){

// }
// else{

// }

// const a=10;
// if(a<10){
//     console.log("a is less than 10");
// }
// else if(a>10){
//     console.log("a is greater than 10");
// }
// else{
//     console.log("a is equal to 10");
// }

const day=12;

if (day === 1) {
   console.log("hi");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Invalid day");
}

// calculate the grade of the student based on the marks

// mark<40 fail
// mark>=40 && mark<60 pass
// mark>=60 && mark<80 first
// mark>=80 distinction
// mark>100 invalid
// mark<0 invalid


const mark=60;
if(mark<0 || mark>100){
    console.log("Invalid mark");
}
 
else if(mark<40){
    console.log("Fail");
}
else if(mark>=40 && mark<60){
    console.log("Pass");
}
else if(mark>=60 && mark<80){
    console.log("First");
}
else{
  console.log("Distinction");
}

