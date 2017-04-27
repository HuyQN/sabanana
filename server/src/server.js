require("babel-polyfill")

var express = require('express');
var bodyParser = require('body-parser');
var database = require('./database');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var postSchema = require('./schemas/post.json');
var validate = require('express-jsonschema').validate;
var views = require('./views');

var app = express();

// http://stackoverflow.com/a/7069902/907060
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(bodyParser.json());
app.use(allowCrossDomain);

function createPost(author, name, description, tags){
  var date = new Date().getTime();
  var newPost = {
    "authorID": author,
    "name": name,
    "description": description,
    "tags": tags,
    "date": date
  };
  newPost = addDocument('post', newPost);
  return newPost;
};

app.get('/posts/', function (req, res) {
  res.send(views.getAllPosts());
});

app.get('/post/:id', function (req, res) {
  var id = req.params.id;
  res.send(views.getPost(id));
});

app.post('/post/', validate({body: postSchema}) , function(req,res){
  var body= req.body;
  var newPost = createPost(body.authorID, body.name, body.description, body.tags);
  res.status(201);
  res.send(newPost);
});

app.get('/user/:userId', function(req,res){
  var userid = req.params.userId;
  var userdata = readDocument('user', userid);
  if(userdata == null){
    res.status(500).end()
  } else {
    res.send(userdata);
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
