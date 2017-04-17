var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Song = require('./song');

var AlbumsSchema = new Schema({
  title: String,
  artist: String,
  image: String,
  releaseDate: String
});

var Albums = mongoose.model('Albums', AlbumsSchema);
 
 module.exports = Albums;
