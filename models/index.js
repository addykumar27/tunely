var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/tunley");


var Album = require('./album');

module.exports.Album = Album;
module.exports.Song = require('./song');