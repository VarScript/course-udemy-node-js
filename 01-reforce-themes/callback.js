
/*
// setTimeout is a function that execute a callback in certain time.
setTimeout( () => {
    console.log('Hello world');
}, 1000);
*/

const getUserById = ( id, callback ) => {

    const user = {
        id,
        name: 'Fabio'
    }

    setTimeout(() => {
        callback( user )
    }, 1500);
}

getUserById( 20, ( user ) => {
    console.log(user.id);
    console.log(user.name.toUpperCase());
} );