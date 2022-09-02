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
            .option ('u', {
                alias: 'until',
                type: 'number',
                demandOption: 10,
                describe: 'It show until where go the table'
            })
            .check( (argv, options) => {
                if ( isNaN(argv.b) ) {
                    throw 'The base have that be a number'
                } 
                return true;
            })
            .argv;

            module.exports = argv;