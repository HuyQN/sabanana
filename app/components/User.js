import React from 'react'

import Posts from './Posts'

function Profile ({profile: {bio, avatar}, name, posts}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-4'>
          <div className='thumbnail'>
            <img src={avatar} />
            <div className='caption'>
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </div>
        <div className='col-xs-8'>
          <Posts posts={posts} includeHeader />
        </div>
      </div>
    </div>
  )
}

const MOCK_DATA = {
  profile: {
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ligula ex, et elementum enim sagittis et. Cras cursus at eros a lacinia. Aliquam erat volutpat. Maecenas pulvinar malesuada quam eget tempus. Nulla egestas scelerisque sem consectetur ornare. Praesent suscipit tempor odio, luctus luctus est rhoncus nec. Vivamus dapibus urna sodales nunc posuere malesuada. Phasellus blandit tellus et augue cursus, eu ornare felis venenatis. Aenean cursus nisl a eros condimentum feugiat. Nullam iaculis dapibus ante, sed hendrerit elit molestie ac.',
    avatar: 'http://placehold.it/350x350'
  },
  name: 'Jennifer Blane',
  posts: [{
    date: 'February 1, 2017',
    name: 'Catan fun!',
    tags: [{
      name: 'board-games'
    }, {
      name: 'fun!'
    }]
  }, {
    date: 'February 23, 2017',
    name: 'yeah lots of sports i love sports',
    tags: [{
      name: 'good-old-times'
    }, {
      name: 'getting-down-to-it'
    }]
  }]
}

export default function User (props) {
  return (
    <div>
      <Profile {...MOCK_DATA} />
    </div>
  )
}
