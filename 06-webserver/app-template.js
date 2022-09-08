const express = require('express')
const app = express()
const port = 8080;

app.set('view engine', 'hbs');

app.use( express.static('public/template'))


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/template/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/template/elements.html')
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/template/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});