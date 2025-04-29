//  and , or , not operators

// and = if all are true then true otherwise false
// or = if any are true then true
// not = if not true then true otherwise false

// age = 16;
// if (age >= 20 || age < 30) {

// } else {

// }

//logical operators 

const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false
console.log(!hasGoodVision); // true



if (hasDriversLicense && hasGoodVision) {
    console.log("You are able to drive!");
} else {
    console.log("Someone else should drive!");
}

const isTired = true; //C 
console.log(hasDriversLicense && hasGoodVision && isTired); // false
console.log(hasDriversLicense && hasGoodVision && !isTired); // false
console.log(hasDriversLicense || hasGoodVision || isTired); // true
console.log(!hasDriversLicense && !hasGoodVision && !isTired); // false