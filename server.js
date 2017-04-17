var express = require('express'),
 bodyParser = require ('body-parser');
var db = require('./models');
var controllers = require('./controllers');
var app = express();


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended:true}));
    
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


 
app.get('/api/Albums', function AlbumsIndex(req, res) { 
  // get all cards from the database 
  db.Albums.find({}, function(err, allAlbums) {
    // add some error checking here!
    // respond, sending all cards back
    res.json(allAlbums);
  });
});

app.get('/api', controllers.api.index);


app.listen(process.env.PORT|| 3000, function () {
    	console.log('listening at http://localhost:3000/');
    });
    