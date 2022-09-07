const express = require('express')
const app = express();
const port = 8080;

// Content static serve of the public folder
app.use( express.static('public') )

app.get('/', (req, res) => {
    res.send('Home page')
});

app.get('/hello-word', (req, res) => {
    res.send('Hello World in his respective route')
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})