import {readDocument, writeDocument, addDocument, readCollection} from './database.js'

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn (data, cb) {
  setTimeout(() => {
    cb(data)
  }, 4)
}

function emulateServerReturnPromise (data) {
  return new Promise((resolve, reject) => emulateServerReturn(data, resolve))
}

export function getUser (userID) {
  return emulateServerReturnPromise(
    readDocument('user', userID)
  )
}

export async function getThreads (userID) {
  const allThreads = readCollection('thread')
  const threads = await emulateServerReturnPromise(
      Object.values(allThreads)
      .filter(({userIDs}) => userIDs.indexOf(userID) !== -1)
  )
  for (const thread of threads) {
    thread.currentUserIndex = thread.userIDs.indexOf(userID)
    thread.users = await Promise.all(thread.userIDs.map(getUser))
    for (const message of thread.messages) {
      message.author = thread.users[message.authorIndex]
    }
  }
  return threads
}

export function sendMessage (thread, message, cb) {
  // copy so that mutating it won't mess up react
  thread = JSON.parse(JSON.stringify(thread))
  thread.messages.push(message)
  delete thread.users
  delete thread.currentUserID
  writeDocument('thread', thread)
  return emulateServerReturnPromise(null)
}

// from http://stackoverflow.com/a/31129384/907060
function sameValues (array1, array2) {
  const as = new Set(array1)
  const bs = new Set(array2)
  if (as.size !== bs.size) return false
  for (var a of as) if (!bs.has(a)) return false
  return true
}

export async function getOrCreateThread (userIDs) {
  const allThreads = readCollection('thread')
  const thread = await emulateServerReturnPromise(
      Object.values(allThreads)
      .find(({userIDs: currentUserIDs}) => sameValues(currentUserIDs, userIDs))
  )
  if (thread) {
    return thread
  }
  return addDocument(
    'thread',
    {
      userIDs,
      messages: []
    }
  )
}

export function getAllPosts (cb) {
  var posts = readCollection('post')
  return emulateServerReturn(Object.values(posts), cb)
}

export async function getUsersPosts (userID) {
  const AllPosts = readCollection('post')
  const Posts = await emulateServerReturnPromise(
      Object.values(AllPosts)
      .filter(({userID}) => userID.indexOf(userID) !== -1)
  )
  return Posts
}
export async function getPost (id) {
  const post = await emulateServerReturnPromise(readDocument('post', id))
  post.author = await getUser(post.authorID)
  return post
}

export function createPost (owner, title, desc, tags) {
  var time = new Date()
  var newTags =[]
  tags.map(function(item){
    newTags.push({name: item})
  })
  var newPost = {
    'authorID': owner,
    'name': title,
    'description': desc,
    'tags': newTags,
    'date': time
  }

  newPost = addDocument('post', newPost)
}
