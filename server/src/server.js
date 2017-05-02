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
var mongo_express = require('mongo-express/lib/middleware')
var mongo_express_config = require('mongo-express/config.default.js')
var MongoDB = require('mongodb')
var MongoClient = MongoDB.MongoClient
var ObjectID = MongoDB.ObjectID
var url = 'mongodb://localhost:27017/sabanana'

// http://stackoverflow.com/a/7069902/907060
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

MongoClient.connect(url, function(err, db){
  app.use(bodyParser.text())
  app.use(bodyParser.json())
  app.use(allowCrossDomain)
  app.use(express.static('../client/build'))

  app.use('/mongo_express', mongo_express(mongo_express_config))

  // create post
  app.post('/post/', validate({body: postSchema}), function (req, res) {
    var body = req.body
    var date = new Date().getTime()
    var newPost = {
      'authorID': new ObjectID(body.authorID),
      'name': body.name,
      'description': body.description,
      'tags': body.tags,
      'date': date
    }
    // insert the object into the database
    db.collection('post').insertOne(newPost, function(err, result){
      if(err){
        return res.status(500).send("A database error occurred: " + err);
      }
      // find the new object created
      db.collection('post').findOne({ _id: result.insertedId}, function(err, object){
        if(err){
          return res.status(500).send("A database error occurred: " + err);
        }
        res.status(201)
        //returns the object
        res.send(object)
      })
    })
  })
  // end of create post

  // update post
  app.put('/post/:id', function (req, res) {
    var body = req.body
    var postid = new ObjectID(req.params.id);
    db.collection('post').findOne({ _id: postid}, function(err, object){
      console.log(object)
    })
    db.collection('post').updateOne({ _id: postid}, {
      $set: {
        name: body.name,
        description: body.description,
        tags: body.tags
      }
    }, function(err, result){
      if(err){
        return res.status(500).send("A database error occurred: " + err);
      }
      db.collection('post').findOne({ _id: postid}, function(err, object){
        if(err){
          return res.status(500).send("A database error occurred: " + err);
        }
        res.status(201)
        res.send(object)
      })
    })
  })
  // end of update post
})

app.get('/posts/', function (req, res) {
  views.getAllPosts().then(a => res.send(a))
})

app.get('/post/:id', function (req, res) {
  var id = new ObjectID(req.params.id)
  views.getPost(id).then(post => res.send(post))
})


app.get('/user/:id/messages/', function (req, res) {
  var id = req.params.id
  views.getThreads(id).then(threads => res.send(threads))
})

app.post('/user/:userID/messages/', function (req, res) {
  var userID = req.params.userID
  var otherUserID = req.body.otherUserID
  views.getOrCreateThread(userID, otherUserID).then(id => res.send({id: id}))
})

app.put('/user/:userID/messages/:threadID', function (req, res) {
  var userID = req.params.userID
  var threadID = req.params.threadID
  var message = req.body.message
  views.sendMessage(threadID, userID, message).then(r => res.send(r))
})

app.get('/user/:userId', function (req, res) {
  var userid = req.params.userId
  views.getUser(userid).then(user => res.send(user))
})

app.get('/userPosts/:userID', function (req, res) {
  res.send(views.getUsersPosts(req.params.userID))
})

app.get('/tags/', function (req, res) {
  views.getTags().then(tags => res.send(tags))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
