require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');

console.clear();


const main = async () => {
    console.log('Hello word'.rainbow)

    let opt = '';

    do{
        opt = await inquirerMenu(); 
        console.log({ opt });

        await pause();

    } while(opt !== '0')
    
}

main();