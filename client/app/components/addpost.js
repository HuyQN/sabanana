import React from 'react'

import PostForm from './PostForm'
import {currentUserID} from '../const'
import {createPost} from '../server'

export default function AddPost () {
  function onSubmit (post) {
    post.authorID = currentUserID
    return createPost(post)
  }
  return (
    <PostForm onSubmit={onSubmit.bind(this)} />
  )
}
