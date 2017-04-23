import React from 'react'
import {Link} from 'react-router-dom'
import {user} from '../propTypes'

export default function UserLink ({user}) {
  return (
    <Link to={`/user/${user._id}`}>{user.name}</Link>
  )
}

UserLink.propTypes = {
  user: user.isRequired
}
