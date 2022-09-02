const argv = require('yargs')

            .option ('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'This is the base of the multiply table'
            })
            .option ('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Show the table in console'
            })
            .check( (argv, options) => {
                if ( isNaN(argv.b) ) {
                    throw 'The base have that be a nunber'
                } 
                return true;
            })
            .argv;

            module.exports = argv;