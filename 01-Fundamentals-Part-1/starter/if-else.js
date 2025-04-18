// let name = 'smiley';
let age = 17;
let isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('You are old enough to vote!');
// } else {
//     console.log('You are not old enough to vote!');
// }

//OR

if (age >= 18) {
    console.log('You are old enough to drive!🚗');
} else {
    let yearLeft = 18 - age;
    console.log(`You are not old enough to drive! You have ${yearLeft} years left!`);
}

const birthYear = 1999;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

