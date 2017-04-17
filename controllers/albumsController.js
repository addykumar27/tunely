
/*var albums = [];
albums.push({
            _id: 132,
            artistName: 'Nine Inch Nails',
            name: 'The Downward Spiral',
            releaseDate: '1994, March 8',
            genres: [ 'industrial', 'industrial metal' ]
          });
albums.push({
            _id: 133,
            artistName: 'Metallica',
            name: 'Metallica',
            releaseDate: '1991, August 12',
            genres: [ 'heavy metal' ]
          });
albums.push({
            _id: 134,
            artistName: 'The Prodigy',
            name: 'Music for the Jilted Generation',
            releaseDate: '1994, July 4',
            genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
          });
albums.push({
            _id: 135,
            artistName: 'Johnny Cash',
            name: 'Unchained',
            releaseDate: '1996, November 5',
            genres: [ 'country', 'rock' ]
          });*/


var db = require('../models');

// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
  db.Album.find({}, function(err, allAlbums) {
    res.json(allAlbums);
  });
}

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
  console.log('body', req.body);

  // split at comma and remove and trailing space
  var genres = req.body.genres.split(',').map(function(item) { return item.trim(); } );
  req.body.genres = genres;

  db.Album.create(req.body, function(err, album) {
    if (err) { console.log('error', err); }
    console.log(album);
    res.json(album);
  });
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
  db.Album.findById(req.params.albumId, function(err, foundAlbum) {
    if(err) { console.log('albumsController.show error', err); }
    console.log('albumsController.show responding with', foundAlbum);
    res.json(foundAlbum);
  });
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  db.Album.findOneAndRemove({ _id: req.params.albumId }, function(err, foundAlbum){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundAlbum);
  });
}// find one album by id, delete it, and send it back as JSON


// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};


