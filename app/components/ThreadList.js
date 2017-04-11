import React from 'react'
import {currentUserID} from '../const'

import {thread} from '../propTypes'

function ThreadButton ({thread, selected, onSelect}) {
  const otherUsers = thread.users
    .filter(({_id}) => _id !== currentUserID)
    .map(({name}) => name)
    .join(' ')
  return (
    <div className='row'>
      <div className='col-md-12' onClick={() => onSelect(thread)}>
        <div className='media-left media-top'>
                PIC
            </div>
        <div className='media-body'>
          {otherUsers}

          {selected ? ' selected' : ' not selected'}
        </div>

      </div>
    </div>
  )
}

ThreadButton.propTypes = {
  thread: React.PropTypes.shape(thread).isRequired,
  selected: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

export default function ThreadList ({threads, selectedThread, onSelectThread}) {
  return (
    <div>
      {threads.map((thread) => (
        <ThreadButton
          key={thread._id}
          thread={thread}
          selected={selectedThread !== null && thread._id === selectedThread._id}
          onSelect={onSelectThread}
          />
        ))}
    </div>
  )
}

ThreadList.propTypes = {
  threads: React.PropTypes.arrayOf(
    React.PropTypes.shape(thread).isRequired
  ).isRequired,
  selectedThread: React.PropTypes.shape(thread),
  onSelectThread: React.PropTypes.func.isRequired
}
