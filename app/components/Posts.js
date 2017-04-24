import React from 'react'
import {unixTimeToString} from '../util'
import {
  Link
} from 'react-router-dom'
import UserLink from './UserLink'

import {post} from '../propTypes'

function Tag (name) {
  return <a href='#' key={name}><em className='text-info'>{name}</em></a>
}

function Tags ({tags}) {
  return (
    <span className='tags'>
      {tags.map(Tag)}
    </span>
  )
}

function Post ({post: {date, name, author, description, tags, _id}}) {
  const convertedTime = unixTimeToString(date)
  return (
    <li>
      <Link to={`/post/${_id}`}>{name}</Link> by <UserLink user={author} />
      <span className='text-muted'> at {convertedTime}</span>
      <p>{description}</p>
      <Tags tags={tags} />
    </li>
  )
}
Post.propTypes = {
  post: post
}

function PostHeader () {
  return (
    <div className='panel-heading'>
      <h2 className='panel-title'>
        Posts
      </h2>
    </div>
  )
}

export default function Posts ({posts, includeHeader}) {
  return (
    <div className='panel panel-default'>
      { includeHeader ? <PostHeader /> : null }
      <div className='panel-body'>
        <ul className='list-unstyled posts'>
          {posts.map(post => {
            return (
              <Post key={post._id}
                post={post} />)
          })}
        </ul>
      </div>
    </div>
  )
}
