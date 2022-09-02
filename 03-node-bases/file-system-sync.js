const { createFile } = require('./helpers/multiply.js')
const argv = require('./config/yargs.js')


console.clear();

createFile( argv.b, argv.l )
    .then( nameFile => console.log(`${nameFile} create`))
    .catch(err => console.log(err))