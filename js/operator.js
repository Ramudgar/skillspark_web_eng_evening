// operators

// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators
// 5. Bitwise operators
// 6. Ternary operators
// 7. String operators
// 8. Typeof operators
// 9. Instanceof operators
// 10. Void operators
// 11. Comma operators
// 12. Unary operators
// 13. Relational operators
// 14. Exponentiation operators
// 15. Grouping operators
// 16. Bitwise shift operators
// 17. Bitwise logical operators
// 18. Bitwise NOT operators
// 19. Bitwise XOR operators
// 20. Bitwise AND operators
// 21. Bitwise OR operators
// 22. Logical NOT operators
// 23. Logical AND operators
// 24. Logical OR operators
// 25. Conditional operators
// 26. Nullish coalescing operators
// 27. Optional chaining operators
// 28. Delete operators
// 29. New operators


// 1. Arithmetic operators
// + - * / % ++ --
console.log(10+20);
console.log(10-20);
console.log(10*20);
console.log(10/20);
console.log(30%20);
console.log(10**2);




let a=10;
// a=a+1;
// a+=1;
// a++;
// a--;
// a+=2;
console.log(a);


// 2. Assignment operators
let b=5;
 

let c=5;
let d='5';

// 3. Comparison operators

// equality
console.log(a==b);
console.log(b==c);
console.log(d==c);

// strict equality
console.log(b===c);
console.log(d===c);

// not equal
console.log(a!=b);

// strict not equal
console.log(a!==b);

// greater than
console.log(a>b);

// less than
console.log(a<b);

// greater than or equal to
console.log(a>=b);

// less than or equal to
console.log(a<=b);


// assignment operators
// = += -= *= /= %= **=

let x=10;
x++;
x+=1;

x=x+1;
console.log(x);

let y=10;
y%=3;
y=y%3;
console.log(y);




console.log(10/0);

let z=10;
z++
z+=3
z=z+3;
z--
console.log(z);

console.log("abc"+1)//2abc abc+1 abc1
console.log("abc"-1)//Nan
console.log("abc")//Nan
console.log("abc"/1)
console.log("abc"%1)
console.log(1+"abc")

console.log("1"+1);//11
console.log(1+"1")//11

console.log(3+3)//6
console.log("3"+"3")// 33
console.log("3" + + 3)// 33
console.log(3 + + "3")// 6
console.log(3+3-3)//3
console.log("3" + "3" - "3") //30
console.log("30"-"3")


console.log(3 + + "3")//6 33
console.log(3 - "3")//33

z=10;
z+=1
z=z+1;

z%=3;
console.log(z);


// comparison operators
// == === != !== > < >= <=

let p=10;
let q='10'
z="5"
 
console.log(p!=q);//false
console.log(p!==q);//true