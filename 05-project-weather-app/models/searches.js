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


    get paramsOpenWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'en'
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
            // ({}) : return object of implicit form
            //console.log(answ.data)
            return answ.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1],
            }));

        } catch (error) {
            return [];
        }
    }



    async weatherPlace( lat, lon ) {

        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOpenWeather, lat, lon }
            });

            const answ = await instance.get();
            const { weather, main } = answ.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }

        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Searches;