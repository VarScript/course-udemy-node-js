const axios = require('axios');


class Searches {

    history = ['Bogota', 'Cusco', 'Mexico'];

    constructor() {
        // ALL: read DB if exist
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoidmFyc2NyaXB0IiwiYSI6ImNsN3F2YXppczA4bmUzdW12ZXNyOHQ3cWsifQ.bIy_Bmmrb02mH2J6iSSV7A',
            'limit': 6,
            'language': 'en'
        }
    }

    async city( place = '' ) {

        try {
            // Http petition with axios more in the documentation 
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramsMapbox
            });

            const answ = await instance.get();
            console.log(answ.data);
    
            return [];
            
        } catch (error) {
            return [];
        }
    }

}

module.exports = Searches;