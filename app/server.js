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
  thread.messages.push(message)
  writeDocument('thread', thread)
  return emulateServerReturnPromise(null)
}

export function getAllPosts (cb) {
  var posts = readCollection('post')
  return emulateServerReturn(Object.values(posts), cb)
}
