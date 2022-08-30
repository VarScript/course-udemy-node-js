// Not use var in any part
var name = 'Fs';
// var in global ambit

if (true) {
    var name = 'Vs';
    console.log(name);
}

console.log(name); // Problem


// Global scope
let name = 'Fs';

if (true) {
    // Block scope
    let name = 'Vs';
}

console.log(name)


// The const value never change
// also are ligerit most 
const name = 'Fs';

if (true) {
    // it is cannot
    name = 'Vs';
}

console.log(name)