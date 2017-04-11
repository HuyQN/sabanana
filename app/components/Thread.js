import React from 'react'

import {thread} from '../propTypes'

function Message ({message: {author, content}}) {
  return (
    <li className='media'>
      <div className='media-left media-top'>
          PIC
        </div>
      <div className='media-body'>
        <a href='#'>{author.name}</a>: {content}
      </div>
    </li>
  )
}

Thread.propTypes = {
  thread: thread.isRequired,
  onMessageSend: React.PropTypes.func.isRequired
}

export default function Thread ({thread, onMessageSend}) {
  if (!thread) {
    return <div>select a thread</div>
  }
  return (
    <div>
      <div className='panel-footer'>

        <ul className='media-list'>
          {thread.messages.map((message, i) => <Message key={i} message={message} />)}
          <li className='media'>
            <div className='media-left media-top'>
                PIC
              </div>
            <div className='media-body'>
              <div className='input-group'>
                <input type='text' className='form-control'
                  placeholder='Write a message...' />
                <span className='input-group-btn'>
                  <button className='btn btn-default' type='button'>
                    <span className='glyphicon glyphicon-ok' />
                  </button>
                </span>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

Thread.propTypes = {
  thread: thread,
  onMessageSend: React.PropTypes.func.isRequired
}
