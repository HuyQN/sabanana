import React from 'react'
import MessageFeed from './messagefeed'
import Messageslist from './messageslist'

import {getMessages} from '../server_messaging'

export default class Messages extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      thread: null
    }
  }

  setThread (thread) {
    this.setState({thread: thread})
  }

  render () {
    return (
      <div>
        <div className='col-md-2 fb-right-sidebar'>
          <Messageslist setThread={this.setThread.bind(this)} />
        </div>
        <div className='col-md-10'>
          <MessageFeed threadID={this.state.thread} />
        </div>

      </div>
    )
  }
}
