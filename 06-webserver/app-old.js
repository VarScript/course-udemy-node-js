const http = require('http');


// req : request-info solicitude / res: response-what will response to the client
http.createServer( ( req, res ) => {


    // Status and content type
    //res.writeHead(202, { 'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    res.writeHead(202, { 'Content-Type': 'application/cvs'});


    res.write( 'id, name\n' );
    res.write( '1, fabio\n' );
    res.write( '2, maria\n' );
    res.write( '3, juan\n' );

    // For say to node that now response finalited
    res.end();
    
})
// listen the port 8080 == localhost:8080 in the browser
.listen( 8080 )

console.log('Listed in the port: ', 8080);