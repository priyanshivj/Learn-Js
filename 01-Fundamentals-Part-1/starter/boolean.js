//5 falsy values : 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log((Boolean));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean("Smiley"));//true
console.log(Boolean({})); // true



const money = 100;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is UNDEFINED!');
}


