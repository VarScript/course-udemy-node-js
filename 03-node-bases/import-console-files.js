// Array destructuring and value assign
const[ , , arg3 = 'base=5' ] =  process.argv;
// Destructure of the that come of the arg3 it pass for the split with character =
// we have two arguments for pass 
const [ , base = 5] = arg3.split('=');
// Print base
console.log( base ); 


// node import-console-files 
// -> 5
