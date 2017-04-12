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
      selectedThreadID: null
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
            selectedThreadID={this.state.selectedThreadID}
            onSelectThread={threadID => this.setState({selectedThreadID: threadID})}
          />
        </div>
        <div className='col-md-10'>
          <Thread
            thread={this.state.threads.find(({_id}) => _id === this.state.selectedThreadID)}
            onMessageSend={this.refreshThreads.bind(this)}
          />
        </div>

      </div>
    )
  }
}
