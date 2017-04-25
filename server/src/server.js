var express = require('express')
var bodyParser = require('body-parser')


import {readDocument, writeDocument, addDocument, readCollection} from './database.js'
import {getAllPosts} from './views'

var app = express()

app.use(bodyParser.json())


app.get('/posts/', function(req, res) {
  res.send(getAllPosts())
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
