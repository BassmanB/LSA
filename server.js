var express = require('express');
app = express();
port = process.env.Port || 3000 ;
mongoose = require('mongoose');
User = require('./models/userListModels');
bodyParser = require('body-parser');
zespoly = require('./models/userListModels');

//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userDb');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({}))


var db = mongoose.connection;

app.get('/', function (req, res){
  res.send('Hello World!');
});

app.get('/api/zespoly', function (req, res){
  zespoly.getGenres(function(err, zesp){
    if(err){
      throw err;
    }
    res.json(zesp);
  });
});

app.listen(port);

console.log('user list started on: '+ port);
