const express = require('express')

class Server {

    constructor() {
        this.app = express(); // 
        this.port = process.env.PORT;

        // Middleware: functions that go add other functionality to my webserver
        this.middleware();

        // Routes of my application
        this.routes();
    }


    middleware() {
        // Public directory
        this.app.use( express.static('public')); // use: is the clave word

    }

    // Routes that i wanna
    routes() {
        this.app.get('/hi', (req, res) => {
            res.send('Hello World');
        });
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server runing in the port: ', this.port);
        });
    }

}

module.exports = Server;