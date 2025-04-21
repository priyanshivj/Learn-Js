// == and ===

// == checks for value equality, while === checks for both value and type equality
// Example of == operator   

const age = '18';
if (age === 18) console.log("You are an adult :D ('strict)");

if (age == 18) console.log("You are an adult :D ('loose')");

const fav = Number(prompt("What's your age ? "));
console.log(fav);
console.log(typeof fav);

if (fav === 23) { // '23' == 23
    console.log('cool! 23 is an amazing number!');
} else if (fav === 7) {
    console.log('7 is also a cool number!');
} else if (fav === 12) {
    console.log('12 is also a cool number!');
}
else {
    console.log('Number is not 7 or 23!');
}

if (fav !== 23) console.log('Why not 23?');
// The === operator is the strict equality operator, which checks for both value and type equality.
