import React from 'react'

import {thread} from '../propTypes'
import UserLink from './UserLink'
import {sendMessage} from '../server'

function Message ({message: {author, content}}) {
  return (
    <li className='media'>
      <div className='media-left media-top'>
          PIC
        </div>
      <div className='media-body'>
        <UserLink user={author} />: {content}
      </div>
    </li>
  )
}

Thread.propTypes = {
  thread: thread.isRequired,
  onMessageSend: React.PropTypes.func.isRequired
}

class NewMessage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  setMessage (e) {
    e.preventDefault()
    this.setState({message: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    sendMessage(
      this.props.thread,
      {
        authorIndex: this.props.thread.currentUserIndex,
        content: this.state.message
      })
    .then(this.props.onMessageSend)
    .then(() => this.setState({message: ''}))
  }

  render () {
    return (
      <li className='media'>
        <div className='media-left media-top'>
            PIC
          </div>
        <div className='media-body'>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className='input-group'>
              <input type='text' className='form-control'
                placeholder='Write a message...'
                value={this.state.message}
                onChange={this.setMessage.bind(this)} />
              <span className='input-group-btn'>
                <button className='btn btn-default' type='button' onClick={this.onSubmit.bind(this)}>
                  <span className='glyphicon glyphicon-ok' />
                </button>
              </span>
            </div>
          </form>
        </div>
      </li>
    )
  }
}

NewMessage.propTypes = {
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
          {thread.messages.map((message, i) => <Message key={`${thread._id}_ ${i}`} message={message} />)}
          <NewMessage thread={thread} onMessageSend={onMessageSend} />
        </ul>
      </div>
    </div>
  )
}

Thread.propTypes = {
  thread: thread,
  onMessageSend: React.PropTypes.func.isRequired
}
