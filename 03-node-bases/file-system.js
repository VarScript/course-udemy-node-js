// Import module
const fs = require('fs');

console.clear();
console.log('=================');
console.log(' Table of the: 5 ');
console.log('=================');
console.log(' ');

const base = 4;
let output = '';

for(let i = 1; i <= 10; i++) {
    output += (`   ${base} x ${i} = ${base * i}\n`)
}
console.log(output);

// use module fs.writeFile( 'name-file' , data, callback)
fs.writeFile( `table-${ base }.txt`, output, (err) =>{
    if (err) throw err;
    console.log('Table create');
})

