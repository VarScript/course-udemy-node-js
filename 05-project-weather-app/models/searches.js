const axios = require('axios');


class Searches {

    history = ['Bogota', 'Cusco', 'Mexico'];

    constructor() {
        // ALL: read DB if exist
    }

    async city( place = '' ) {

        try {
            // http petition
            const answ = await axios.get('https://reqres.in/api/users?page=2');
            console.log(answ.data);
    
            return [];
            
        } catch (error) {
            return [];
        }
    }

}

module.exports = Searches;