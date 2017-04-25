var express = require('express')
var bodyParser = require('body-parser')

var views = require('./views')

var app = express()

// http://stackoverflow.com/a/7069902/907060
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
}

app.use(bodyParser.json())
app.use(allowCrossDomain)

app.get('/posts/', function (req, res) {
  res.send(views.getAllPosts())
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
