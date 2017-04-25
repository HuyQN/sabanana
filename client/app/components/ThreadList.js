import React from 'react'
import {currentUserID} from '../const'
import {
  Link
} from 'react-router-dom'

import {thread} from '../propTypes'

function ThreadButton ({thread, selected}) {
  const otherUsers = thread.users
    .filter(({_id}) => _id !== currentUserID)
    .map(({name}) => name)
    .join(' ')
  return (
    <div className='row'>
      <div className='col-md-12'>
        <Link to={`/messages/${thread._id}`}>
          <div className='media-left media-top'>
                  PIC
              </div>
          <div className='media-body'>
            {otherUsers}

            {selected ? ' selected' : ' not selected'}
          </div>
        </Link>
      </div>
    </div>
  )
}

ThreadButton.propTypes = {
  thread: thread.isRequired,
  selected: React.PropTypes.bool.isRequired
}

export default function ThreadList ({threads, selectedThreadID, onSelectThread}) {
  return (
    <div>
      {threads.map((thread) => (
        <ThreadButton
          key={thread._id}
          thread={thread}
          selected={selectedThreadID !== null && thread._id === selectedThreadID}
          />
        ))}
    </div>
  )
}

ThreadList.propTypes = {
  threads: React.PropTypes.arrayOf(
    thread.isRequired
  ).isRequired,
  selectedThreadID: React.PropTypes.number
}
