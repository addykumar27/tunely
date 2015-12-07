// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var albumsList =[
];

db.Album.remove({}, function(err, foods){

  db.Album.create(albumsList, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("created", albums.length, "albums");
    process.exit();
  });

});
