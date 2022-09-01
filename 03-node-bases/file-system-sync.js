const { createFile } = require('./helpers/multiply.js')

const base = 5;

createFile( base )
    .then( nameFile => console.log(`${nameFile} create`))
    .catch(err => console.log(err))