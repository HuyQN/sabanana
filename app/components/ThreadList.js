import React from 'react'
import {currentUserID} from '../const'

import {thread} from '../propTypes'

function ThreadButton ({thread, selected, onSelectThread}) {
  const otherUsers = thread.users
    .filter(({_id}) => _id !== currentUserID)
    .map(({name}) => name)
    .join(' ')
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='media-left media-top'>
                PIC
            </div>
        <div className='media-body'>
          <a onClick={onSelectThread}>{otherUsers}</a>
        </div>
      </div>
    </div>
  )
}

ThreadButton.propTypes = {
  thread: React.PropTypes.shape(thread).isRequired,
  select: React.PropTypes.bool.isRequired,
  onSelectThread: React.PropTypes.func.isRequired
}

export default function ThreadList ({threads, selectedThread, onSelectThread}) {
  return (
    <div>
      {threads.map((thread) => (
        <ThreadButton
          thread={thread}
          selected={selectedThread && thread._id === selectedThread._id}
          onSelectThread={onSelectThread}
          />
        ))}
    </div>
  )
}

ThreadList.propTypes = {
  threads: React.PropTypes.arrayOf(
    React.PropTypes.shape(thread).isRequired
  ).isRequired,
  selectedThread: React.PropTypes.number,
  onSelectThread: React.PropTypes.func.isRequired
}
