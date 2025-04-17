/*

let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is fun');

40 + 50 - 20; // 20
console.log(40 + 50 - 20); // 70

console.log("smiley");
console.log(23);

let firstName = "Priyanshi";
let first = 'Priyanshi';
console.log(firstName);
console.log(firstName = 'smiley');

let jonas_smiley = "sm";
let $function = 27;
let first_Name = "Priyanshi";
let PI = 3.1415;


let myFirstJob = 'Programmer';
let mycurrentJob = 'teacher';

let job1 = 'Programmer';
let job2 = 'teacher';

console.log(myFirstJob);

*/

// TODO -  Data Types

/*
// 1. Boolean 

let javascriptIsFun = true;
console.log(javascriptIsFun); // true

// console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
// console.log(typeof 23); //  number
// console.log(typeof "hello smiley"); // string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year); // number

console.log(typeof null);

*/

// TODO -  let, const and var

/*
let age = 30;
age = 32;
console.log(age); // 32

const birthDate = 1999;
// birthDate = 2000; // error
console.log(birthDate); // 1999

// const job;
// job = 'teacher'; // error
// console.log(job); // error

var jobs = 'teacher';
jobs = 'programmer';
console.log(jobs); // programmer

lastName = 'vijay';
console.log(lastName); // vijay


// var is function scoped and let is block scoped
// var can be redeclared and updated
// let can be updated but not redeclared
// const can neither be updated nor redeclared

// const is block scoped
// let is block scoped
// var is function scoped
// var is hoisted to the top of the function or global scope
// let and const are hoisted to the top of the block scope
// but not initialized
// so they cannot be accessed before the declaration
// this is called temporal dead zone
// so if we try to access them before the declaration
// we will get a reference error
// but if we try to access var before the declaration
// we will get undefined
// this is called hoisting
// so var is hoisted to the top of the function or global scope
// and initialized with undefined

*/

// TODO -  Basic Operators

// 1. Parentheses
// 2. Exponentiation **
// 3. Multiplication and Division * / %
// 4. Addition and Subtraction + -
// 5. Comparison Operators < > <= >=
// 6. Equality Operators == === != !==
// 7. Logical Operators && || !
// 8. Assignment Operators = += -= *= /= %= **=
// 9. Conditional Operators ? :
// 10. Comma Operator ,
// 11. Spread Operator ...
// 12. Rest Operator ...
// 13. Destructuring Operator {...}
// 14. Template Literals ``
// 15. Tagged Templates ${}
// 16. Optional Chaining ?.
// 17. Nullish Coalescing ??
// 18. Nullish Coalescing Assignment ??=
// 19. Logical Assignment Operators &&= ||= ??=
// 20. Object Spread Operator {...}
// 21. Object Rest Operator {...}
// 22. Object Destructuring {...}
// 23. Array Destructuring [...]
// 24. Array Spread Operator [...]
// 25. Array Rest Operator [...]
// 26. Array Destructuring with Default Values [...]
// 27. Array Destructuring with Rest Operator [...]
// 28. Array Destructuring with Default Values and Rest Operator [...]
// 29. Array Destructuring with Default Values and Rest Operator and Spread Operator [...]
// 30. Array Destructuring with Default Values and Rest Operator and Spread Operator and Object Destructuring {...}

/* 
const now = 2037;
const ageSarah = now - 1991;
const ageJonas = now - 1999;
console.log(ageJonas, ageSarah); // 38 46
console.log(ageSarah); // 46

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

const firstName = 'Priyanshi';
const lastName = 'Vijay';
console.log(firstName + ' ' + lastName); // Priyanshi Vijay
console.log(`${firstName} ${lastName}`); // Priyanshi Vijay

console.log(`${firstName} is a ${ageJonas - ageSarah} years younger than ${lastName}`); // Priyanshi is a 8 years younger than Vijay
console.log('Priyanshi is a teacher'); // Priyanshi is a teacher    

let x = 10 + 5;
x += 10;// x = x + 10
console.log(x);
x *= 4; //x = x * 4 = 100
console.log(x);
x++; // x = x + 1 = 101
console.log(x);
x--;// x = x - 1 = 100
console.log(x);


//  Comparison Operators
console.log(ageJonas > ageSarah); //false ---- >,<,>=,<=
console.log(ageSarah >= 18); //true

const isFullAge = ageSarah >= 18; // true
console.log(now - 1991 > now - 1999); // true

*/

//NOTE - Operator Precedence

const now = 2037;
const ageSarah = now - 1991;
const ageJonas = now - 1999;
console.log(now - 1991 > now - 1999); // true

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // 10 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
