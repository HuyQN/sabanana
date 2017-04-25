var database = require('./database.js')

function getUser (userID) {
  return database.readDocument('user', userID)
}

function getAllPosts () {
  var posts = Object.values(database.readCollection('post'))
  for (var post of posts) {
    post.author = getUser(post.authorID)
  }
  return posts
}

module.exports = {
  getUser: getUser,
  getAllPosts: getAllPosts
}
