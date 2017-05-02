var database = require('./database.js')
var mongo_express = require('mongo-express/lib/middleware')
var mongo_express_config = require('mongo-express/config.default.js')
var MongoDB = require('mongodb')
var MongoClient = MongoDB.MongoClient
var ObjectID = MongoDB.ObjectID

const url = 'mongodb://localhost:27017/sabanana'

function getDB () {
  return MongoClient.connect(url)
}

function getUser (userID) {
  return getDB().then(
    db => db.collection('user').find({_id: userID}).toArray()
  ).then(users => users[0])
}

function getAllPosts () {
  return getDB().then(
    db => db.collection('post').find({}).toArray()
  ).then(
    // add `author` to all  posts, by getting the `authorID` from the database
    posts => (
      Promise.all(
        posts
        .map(post => post.authorID)
        .map(getUser)
      ).then(
        authors => (
          authors.map(
            (author, index) => {
              posts[index].author = author
              return posts[index]
            }
          )
        )
      )
    )
  )
}

function getPost (id) {
  return getDB().then(
      db => db.collection('post').find({_id: id}).toArray()
    ).then(posts => {
      const post = posts[0]
      return getUser(post.authorID).then(user => {
        post.author = user
        return post
      })
    }
    )
}

// fills up a thread object with info about both the users
function fillThread (thread, userID) {
  thread.currentUserIndex = thread.userIDs.indexOf(userID)
  return Promise.all(thread.userIDs.map(getUser)).then(
    users => {
      thread.users = users
      for (const message of thread.messages) {
        message.author = thread.users[message.authorIndex]
      }
      return thread
    }
  )
}

function getThreads (userID) {
  return getDB().then(
    db => db.collection('thread').find({userIDs: userID}).toArray()
  ).then(
    threads => Promise.all(threads.map(thread => fillThread(thread, userID)))
  )
}

function getOrCreateThread (userID, otherUserID) {
  return getDB().then(
    db => db.collection('thread').find(
      {userIDs: {$all: [userID, otherUserID]}}
    ).toArray()
  ).then(
    threads => {
      if (threads.length > 0) {
        return threads[0]._id
      } else {
        return getDB().then(
          db => db.collection('thread').insertOne({
            userIDs: [userID, otherUserID],
            messages: []
          }).then(op => op.insertedId))
      }
    }
  )
}

function sendMessage (threadID, userID, message) {
  return getDB().then(
    db => db.collection('thread').find({_id: threadID}).toArray()
  ).then(
    threads => {
      console.log(threads)
      const thread = threads[0]
      const authorIndex = thread.userIDs.indexOf(userID)
      return getDB().then(
        db => db.collection('thread').update(
          {_id: threadID},
          {
            $push: {
              messages: {
                authorIndex: authorIndex,
                content: message
              }
            }
          }
        )
      )
    }
  )
}

function getUsersPosts (userID) {
  const AllPosts = getAllPosts()
  const Posts = Object.values(AllPosts).filter((post) => post.authorID == userID)
  for (const post of Posts) {
    post.author = getUser(post.authorID)
  }
  return Posts
}

function getTags () {
  return getDB().then(
    db => db.collection('post').find({}).toArray()
  ).then(function (posts) {
    var set = new Set()
    for (const post of Object.values(posts)) {
      for (const tag of post.tags) {
        set.add(tag)
      }
    }
    return set
  })
}

module.exports = {
  getUser: getUser,
  getAllPosts: getAllPosts,
  getPost: getPost,
  getThreads: getThreads,
  sendMessage: sendMessage,
  getOrCreateThread: getOrCreateThread,
  getUsersPosts: getUsersPosts,
  getTags: getTags
}
