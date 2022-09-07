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
                    console.log(placeSelect)
                    // Weather
    
                    // Show results
                    console.log('\nCity information\n'.green);
                    console.log('City: ', placeSelect.name);
                    console.log('Lat: ', placeSelect.lat);
                    console.log('Lng: ', placeSelect.lng);
                    console.log('Temperature: ', );
                    console.log('Min: ', );
                    console.log('Max: ', );
                break;
        }


        if ( opt !== 0 ) await pause();

    } while( opt !== 0);

}

main();