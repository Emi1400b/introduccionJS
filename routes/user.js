'use strict'

var express = require('express');
var UserController = require('../controller/user');
//utilizar rutas de express
var api = express.Router();

api.get('/prueba-controlador', UserController.pruebas);

//exportar
module.exports = api;