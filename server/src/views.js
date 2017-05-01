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

function getPost (id) {
  var post = database.readDocument('post', id)
  post.author = getUser(post.authorID)
  return post
}


// fills up a thread object with info about both the users
function fillThread (thread, userID) {
  thread.currentUserIndex = thread.userIDs.indexOf(userID)
  thread.users = thread.userIDs.map(getUser)
  for (const message of thread.messages) {
    message.author = thread.users[message.authorIndex]
  }
  return thread
}

function getThreads (userID) {
  const allThreads = database.readCollection('thread')
  return Object.values(allThreads)
      .filter(thread => thread.userIDs.indexOf(userID) !== -1)
      .map(thread => fillThread(thread, userID))
}

function getOrCreateThread (userID, otherUserID) {
  "use strict";
  const allThreads = database.readCollection('thread')
  let thread = Object.values(allThreads)
      .find(thread => thread.userIDs.indexOf(userID) !== -1 && thread.userIDs.indexOf(otherUserID) !== -1)
  if (thread) {
    return thread._id
  }
  return database.addDocument(
    'thread',
    {
      userIDs: [userID, otherUserID],
      messages: []
    }
  )._id
}

function sendMessage (threadID, userID, message) {
  const thread = database.readDocument('thread', threadID)
  const authorIndex = thread.userIDs.indexOf(userID)
  thread.messages.push({
    authorIndex: authorIndex,
    content: message
  })
  database.writeDocument('thread', thread)
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
  posts = getAllPosts()
  var set = new Set()
  for (const post of Object.values(posts)) {
    for (const tag of post.tags) {
      set.add(tag)
    }
  }
  return set
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
