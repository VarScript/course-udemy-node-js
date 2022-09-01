const { createFile } = require('./helpers/multiply.js')
const argv = require('yargs')

            .option ('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
            })
            .option ('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false,
            })
            .check( (argv, options) => {
                if ( isNaN(argv.b) ) {
                    throw 'The base have that be a nunber'
                } 
                return true;
            })

            
            .argv;


console.clear();

console.log(argv);

createFile( argv.b, argv.l )
    .then( nameFile => console.log(`${nameFile} create`))
    .catch(err => console.log(err))