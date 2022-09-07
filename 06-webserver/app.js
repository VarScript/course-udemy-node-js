const http = require('http');


// req : request-info solicitude / res: response-what will response to the client
http.createServer( ( req, res ) => {

    res.write('Helo world');
    // For say to node that now response finalited
    res.end();
    
})
// listen the port 8080 == localhost:8080 in the browser
.listen( 8080 )

console.log('Listed in the port: ', 8080);