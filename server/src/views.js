import {readDocument, writeDocument, addDocument, readCollection} from './database.js'

export function getUser (userID) {
  return readDocument('user', userID)
}

export function getAllPosts () {
  const posts = Object.values(readCollection('post'))
  for (const post of posts) {
    post.author = getUser(post.authorID)
  }
  return posts
}
