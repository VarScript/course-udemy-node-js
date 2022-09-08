require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;



// Handelbars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

app.use( express.static('public/template'))


app.get('/', (req, res) => {
    res.render('home', {
        name: 'Fabio',
        title: 'Course of Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Fabio',
        title: 'Course of Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Fabio',
        title: 'Course of Node'
    });
})


app.get('*', (req, res) => {
    res.render('404')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});