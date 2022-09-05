const fs = require('fs');

const saveDb = ( data ) => {

    const file = './db/data.json'
    // JSON.stringify convert an ocject in string
    fs.writeFileSync( file, JSON.stringify(data));
}

module.exports = {
    saveDb
}