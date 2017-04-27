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

export async function getUser (userID) {
  const response = await fetch(`http://localhost:3000/user/${userID}`)
  return response.json()
}

export async function getThreads (userID) {
  const response = await fetch(`http://localhost:3000/user/${userID}/messages`)
  return response.json()
}

export function sendMessage (threadID, userID, message) {
  return fetch(`http://localhost:3000/user/${userID}/messages/${threadID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message
    })
  })
}

// from http://stackoverflow.com/a/31129384/907060
function sameValues (array1, array2) {
  const as = new Set(array1)
  const bs = new Set(array2)
  if (as.size !== bs.size) return false
  for (var a of as) if (!bs.has(a)) return false
  return true
}

export async function getOrCreateThread (userID, otherUserID) {
  const response = await fetch(`http://localhost:3000/user/${userID}/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      otherUserID: otherUserID
    })
  })
  return (await response.json()).id
}

export async function getAllPosts () {
  const response = await fetch('http://localhost:3000/posts/')
  return response.json()
}

export async function getUsersPosts(userID) {
  const response = await fetch(`http://localhost:3000/userPosts/${userID}`)
  return response.json()
}

export async function getPost (id) {
  const response = await fetch(`http://localhost:3000/post/${id}`)
  return response.json()
}

export function createPost (post, cb) {
  sendXHR('POST', '/post/', {
    'authorID': post.authorID,
    'name': post.name,
    'description': post.description,
    'tags': post.tags
  }, (xhr) => {
    cb(JSon.parse(xhr.responseText))
  })
}

export function updatePost (post) {
  return emulateServerReturnPromise(writeDocument('post', post)).then(() => post)
}

export async function getTags () {
  const posts = await emulateServerReturnPromise(readCollection('post'))
  const tags = new Set()
  for (const post of posts) {
    for (const tag of post.tags) {
      tags.add(tag)
    }
  }
  return tags
}

var token = '' // <-- Put your base64'd JSON token here
/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR (verb, resource, body, cb) {
  var xhr = new XMLHttpRequest()
  xhr.open(verb, resource)
  xhr.setRequestHeader('Authorization', 'Bearer ' + token)

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function () {
    var statusCode = xhr.status
    var statusText = xhr.statusText
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr)
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText
      FacebookError('Could not ' + verb + ' ' + resource + ': Received ' +
		            statusCode + ' ' + statusText + ': ' + responseText)
    }
  })

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function () {
    FacebookError('Could not ' + verb + ' ' + resource +
	              ': Could not connect to the server.')
  })

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function () {
    FacebookError('Could not ' + verb + ' ' + resource +
		          ': Request timed out.')
  })

  switch (typeof (body)) {
    case 'undefined':
      // No body to send.
      xhr.send()
      break
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8')
      xhr.send(body)
      break
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body))
      break
    default:
      throw new Error('Unknown body type: ' + typeof (body))
  }
}
