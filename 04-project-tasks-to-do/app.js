require('colors');

const { showMenu, pause } = require('./helpers/messages.js') 
console.clear();


const main = async () => {
    console.log('Hello word'.rainbow)

    let opt = '';

    do{
        opt = await showMenu(); 
        console.log({ opt });

        if ( opt !== '0' ) await pause();

    } while(opt !== '0')
    
}

main();
