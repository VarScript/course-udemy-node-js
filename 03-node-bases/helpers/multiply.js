// Import module
const fs = require('fs');

const createFile = async ( base, listar = false) =>  {
    try {
        
        
        let output = ''

        for(let i = 1; i <= 10; i++) {

            output += (`   ${base} x ${i} = ${base * i}\n`);

        }
        
        if ( listar ) {
            console.clear();
            console.log('=================');
            console.log(` Table of the: ${base} `);
            console.log('=================');
            console.log(' ');
            console.log(output);
        } 


        fs.writeFileSync(`table-${ base }.txt`, output); 
        return (`Table-${base}.txt`)
        
        
    } catch (error) {
        throw error;
    }
}        


module.exports = {
    createFile
}

