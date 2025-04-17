const firstName = "smiley";
const job = "programmer";
const birthYear = 1999;
const year = 2025; // Define the current year

// const smiley = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(smiley);

const smiley2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// Template literals allow for multi-line strings and string interpolation
console.log(smiley2);

console.log(`just a regular  ${job}....`);

// old way - template literals

console.log('string with \n\
quotes\' and \n\
backslashes');

//new way

console.log(`string with
    multiline
    codes`);
