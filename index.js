'use strict'//JavaScript ES6 (EmmaSript) la versión más reciente

var mongoose = require('mongoose'); // se crea una variable que va a contener una peticón de mongoose
mongoose.connect('mongodb://localhost:27017/introduccionJS', (err, res) => {
    if(err) {
        throw err;
    } else {
        console.log('Conexión establecida.');
         }
    }
);