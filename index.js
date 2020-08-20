'use strict'//JavaScript ES6 (EmmaSript) la versión más reciente

var mongoose = require('mongoose'); // se crea una variable que va a contener una peticón de mongoose
var app = require('./app');
var port = process.env.PORT || 3900;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/introduccionJS', (err, res) => {
    if(err) {
        throw err;
    } else {
            console.log('Conexión establecida...');

            app.listen(port, function() {
                console.log('Servidor del API REST de música escuchando en http://localhost:'+port)
            })
         } 
    }
);