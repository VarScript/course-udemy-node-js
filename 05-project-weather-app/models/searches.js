const axios = require('axios');


class Searches {

    history = ['Bogota', 'Cusco', 'Mexico'];

    constructor() {
        // ALL: read DB if exist
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
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