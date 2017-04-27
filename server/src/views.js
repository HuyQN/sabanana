var database = require('./database.js')

function getUser (userID) {
  return database.readDocument('user', userID)
}

function getAllPosts () {
  var posts = database.readCollection('post')
  Object.keys(posts).map(function (key) {
    var post = posts[key]
    post.author = getUser(post.authorID)
  })
  return posts
}

module.exports = {
  getUser: getUser,
  getAllPosts: getAllPosts
}
