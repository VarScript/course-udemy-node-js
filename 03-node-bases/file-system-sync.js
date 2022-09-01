const { createFile } = require('./helpers/multiply.js')

const argv = require('yargs').argv;


// Print two things: argv that is in the process AND The argv that come the yargs

console.log( process.argv );
console.log( argv );

console.log( 'Base: yargs ', argv.base )


// createFile( base )
//     .then( nameFile => console.log(`${nameFile} create`))
//     .catch(err => console.log(err))