const http = require('http');


// req : request-info solicitude / res: response-what will response to the client
http.createServer( ( req, res ) => {


    // Status and content type
    res.writeHead(202, { 'Content-Type': 'application/json'});

    const person = {
        id: 1,
        name: 'Fabio'
    }

    // Here have that be a string because it's put the JSON.stringify
    res.write( JSON.stringify( person ));
    // For say to node that now response finalited
    res.end();
    
})
// listen the port 8080 == localhost:8080 in the browser
.listen( 8080 )

console.log('Listed in the port: ', 8080);