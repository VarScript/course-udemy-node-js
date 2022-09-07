require('dotenv').config()

const { readInput,
    inquirerMenu, 
    pause,
    listPlaces
} = require("./helpers/inquirer");
const Searches = require('./models/searches');


const main = async() => {

    const searches = new Searches();
    let opt;

    do {

        opt = await inquirerMenu();

        switch ( opt ) {
            case 1:
                    // Show message
                    const citySearch = await readInput('City: ');
                    
                    // Shearch the places
                    const places = await searches.city( citySearch );
                    
                    // Select the place
                    const id = await listPlaces( places );
                    const placeSelect = places.find( l => l.id === id )
                    // console.log(placeSelect)

                    // Weather
                    const weather = await searches.weatherPlace( placeSelect.lat, placeSelect.lng )
                    //console.log(weather);

                    // Show results
                    console.clear();
                    console.log('\nCity information\n'.yellow);
                    console.log('City: ', placeSelect.name.yellow);
                    console.log('Lat: ', placeSelect.lat);
                    console.log('Lng: ', placeSelect.lng);
                    console.log('Temperature: ', weather.temp);
                    console.log('Min: ', weather.min);
                    console.log('Max: ', weather.max);
                    console.log('How is the weather?: ', weather.desc.yellow);
                break;
        }


        if ( opt !== 0 ) await pause();

    } while( opt !== 0);

}

main();