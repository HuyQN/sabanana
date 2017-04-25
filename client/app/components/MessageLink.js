import React, {PropTypes} from 'react'
import {user} from '../propTypes'
import {getOrCreateThread} from '../server'
import {currentUserID} from '../const'

// We don't wanna get the thread ID if we never click on the "message"
// button, because this requires a database add to make the thread.
// so we generate/get it when we click on the thread
export default function MessageLink ({user}, {router}) {
  // routing outside Link copied from
  // https://github.com/ReactTraining/react-router/blob/b82a39d7f44e8d43bb60cf126e8ffbb1e867347d/packages/react-router-dom/modules/Link.js
  function onClick (event) {
    event.preventDefault()
    getOrCreateThread([user._id, currentUserID])
        .then(({_id}) =>
          router.history.push(
            `/messages/${_id}`
          )
        )
  }
  if (user._id === currentUserID) {
    return null
  }
  return (
    <button type='button' onClick={onClick} className='btn btn-default'>
      Message {user.name}
    </button>
  )
}

MessageLink.propTypes = {
  user: user.isRequired
}

MessageLink.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
      createHref: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
}
