'use strict'

var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

function pruebas(req, res) {
    res.status(200).send({
        message: 'proobando nuestra API desde el CONTROLADOR de usuario'
    });//puerto de respuesta
}

module.exports = {
    pruebas
}