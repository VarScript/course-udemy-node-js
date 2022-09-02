require('colors');

const { showMenu, pause } = require('./helpers/messages.js') 
console.clear();


const main = async () => {
    console.log('Hello word'.rainbow)

    showMenu();
    
    pause();
    
}

main();
