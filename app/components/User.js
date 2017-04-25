import React from 'react'
import {getUser} from '../server'
import Posts from './Posts'
//import {user} from '../propTypes'
import {getUsersPosts} from '../server.js'
import Bio from './bio'
import MessageLink from './MessageLink'

export default class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      data: []
    }
    this.refreshUser()
    getUsersPosts(this.props.match.params.userID).then((data) => this.setState({data}))
  }

  refreshUser () {
    getUser(this.props.match.params.userID).then(
      user => this.setState({user})
    )
  }

  render () {
    if (this.state.user === null) {
      return <div>loading User</div>
    }
    return (
      <div className='container'>
        <div className='row'>
          <Bio user={this.state.user} />
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='btn-group' role='group' aria-label='...'>
              <MessageLink user={this.state.user} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <Posts posts={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}
