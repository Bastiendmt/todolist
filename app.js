var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();


/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))


/* Gestion des routes en-dessous
   ....                         */
var app = express();

app.get('/todo', function (req, res) {

})

    .post('/todo/add', function (req, res) {

    })

    .get('/todo/delete/:id', function (req, res) {

    });

