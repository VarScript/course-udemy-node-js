const axios = require('axios');


class Searches {

    history = ['Bogota', 'Cusco', 'Mexico'];

    constructor() {
        // ALL: read DB if exist
    }

    async city( place = '' ) {

        try {
            // http petition
            const answ = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madr.json?proximity=ip&language=en&access_token=pk.eyJ1IjoidmFyc2NyaXB0IiwiYSI6ImNsN3F2YXppczA4bmUzdW12ZXNyOHQ3cWsifQ.bIy_Bmmrb02mH2J6iSSV7A');
            console.log(answ.data);
    
            return [];
            
        } catch (error) {
            return [];
        }
    }

}

module.exports = Searches;