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
      selectedThreadID: this.props.match.params.threadID
    }
    this.refreshThreads()
  }

  refreshThreads () {
    getThreads(currentUserID).then(
      threads => this.setState({threads})
    )
  }

  componentWillReceiveProps (nextProps) {
    this.setState({selectedThreadID: this.props.match.params.threadID})
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
