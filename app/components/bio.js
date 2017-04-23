import React from 'react'
import {user} from '../propTypes'

export default function Bio ({user: {name, bio}}) {
  return (
    <div className='col-md-3'>
      <div className='thumbnail'>
        <img src='http://placehold.it/350x350' />
        <div className='caption'>
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  )
}


Bio.propTypes = {
  user: user.isRequired
}
