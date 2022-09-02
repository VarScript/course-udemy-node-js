require('colors');


const showMenu = () => {

    console.clear();
    console.log('========================'.green);
    console.log('    Select an option    '.green);
    console.log('========================\n'.green);

    console.log(`${ '1.'.green } Create task`);
    console.log(`${ '2.'.green } List task`);
    console.log(`${ '3.'.green } List completed task`);
    console.log(`${ '4.'.green } List pending task`);
    console.log(`${ '5.'.green } Completed task(s)`);
    console.log(`${ '6.'.green } Delete task`);
    console.log(`${ '0.'.green } Exit \n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Selec the option: ', (opt) => {
        readline.close();
    });

}

const pause = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPress ${'ENTER'.green} to continue\n`, (opt) => {
        readline.close();
    })
}

module.exports = {
    showMenu,
    pause
}