import React from 'react'

function Tag ({name}) {
  return <a href='#'><em className='text-info'>{name}</em></a>
}

function Tags ({tags}) {
  return (
    <span className='tags'>
      {tags.map(Tag)}
    </span>
  )
}

function Post ({date, name, tags}) {
  return (
    <li><a><span className='text-muted'>{date}</span> {name}</a> <Tags tags={tags} /> </li>
  )
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
          {posts.map(Post)}
        </ul>
      </div>
    </div>
  )
}
