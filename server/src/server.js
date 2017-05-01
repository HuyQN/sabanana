require('babel-polyfill')

var express = require('express')
var bodyParser = require('body-parser')
var database = require('./database')
var readDocument = database.readDocument
var writeDocument = database.writeDocument
var addDocument = database.addDocument
var postSchema = require('./schemas/post.json')
var validate = require('express-jsonschema').validate
var views = require('./views')

var app = express()

// http://stackoverflow.com/a/7069902/907060
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(allowCrossDomain)
app.use(express.static('../client/build'))

function createPost (author, name, description, tags) {
  var date = new Date().getTime()
  var newPost = {
    'authorID': author,
    'name': name,
    'description': description,
    'tags': tags,
    'date': date
  }
  newPost = addDocument('post', newPost)
  return newPost
};

app.get('/posts/', function (req, res) {
  views.getAllPosts().then(a => console.log(a))
  views.getAllPosts().then(a => res.send(a))
})

app.get('/post/:id', function (req, res) {
  var id = req.params.id
  res.send(views.getPost(id))
})

app.post('/post/', validate({body: postSchema}), function (req, res) {
  var body = req.body
  var newPost = createPost(body.authorID, body.name, body.description, body.tags)
  res.status(201)
  res.send(newPost)
})

app.get('/user/:id/messages/', function (req, res) {
  var id = parseInt(req.params.id)
  res.send(views.getThreads(id))
})

app.post('/user/:userID/messages/', function (req, res) {
  var userID = parseInt(req.params.userID)
  var otherUserID = req.body.otherUserID
  res.send({id: views.getOrCreateThread(userID, otherUserID)})
})

app.put('/user/:userID/messages/:threadID', function (req, res) {
  var userID = parseInt(req.params.userID)
  var threadID = parseInt(req.params.threadID)
  var message = req.body.message
  res.send(views.sendMessage(threadID, userID, message))
})

app.get('/user/:userId', function (req, res) {
  var userid = req.params.userId
  var userdata = readDocument('user', userid)
  if (userdata == null) {
    res.status(500).end()
  } else {
    res.send(userdata)
  }
})

app.get('/userPosts/:userID', function (req, res) {
  res.send(views.getUsersPosts(req.params.userID))
})

app.put('/post/:id', function (req, res) {
  var id = req.params.id
  var postItem = readDocument('post', id)
    // Update text content of post
  var newpost = req.body
  newpost.date = postItem.date
  newpost._id = postItem._id
  writeDocument('post', newpost)
  res.send(readDocument('post', id))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/tags/', function (req, res) {
  res.send(views.getTags())
})
