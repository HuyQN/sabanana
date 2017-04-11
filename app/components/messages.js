import React from 'react'

import Thread from './Thread'
import ThreadList from './ThreadList'
import {getThreads} from '../server'
import {currentUserID} from '../const'

export default class Messages extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      threads: null,
      selectedThread: null
    }
    this.refreshThreads()
  }

  refreshThreads () {
    getThreads(currentUserID).then(
      threads => this.setState({threads})
    )
  }

  render () {
    if (this.state.threads === null) {
      return <div>loading threads</div>
    }
    return (
      <div>
        <div className='col-md-2 fb-right-sidebar'>
          <ThreadList
            threads={this.state.threads}
            selectedThread={this.state.selectedThread}
            onSelectThread={thread => this.setState({selectedThread: thread})}
          />
        </div>
        <div className='col-md-10'>
          <Thread
            thread={this.state.selectedThread}
            onMessageSend={this.refreshThreads.bind(this)}
          />
        </div>

      </div>
    )
  }
}
