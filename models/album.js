'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    //HACER REFERENCIA A LA LLAVE FORANEA
    artist: {type: Schema.Object, ref: 'Artist' } 
});

module.exports = mongoose.model('Album', AlbumSchema);