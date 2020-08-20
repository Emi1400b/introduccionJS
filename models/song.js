'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = Schema({
    number: String,
    name: String,
    duration: Number,
    file: String,
    //HACER REFERENCIA A LA LLAVE FORANEA
    album: {type: Schema.Object, ref: 'Album' } 
});

module.exports = mongoose.model('Song', SongSchema);