const { createFile } = require('./helpers/multiply.js');
const argv = require('./config/yargs.js');
const colors = require('colors');


console.clear();

createFile( argv.b, argv.l )
    .then( nameFile => console.log(`${nameFile} create`.underline.blue))
    .catch(err => console.log(err))