import React from 'react'
import {getUser} from '../server'
import Posts from './Posts'
//import {user} from '../propTypes'
import getUsersPosts from '../server.js'
import Bio from './Bio'

export default class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
    this.refreshUser()
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
      </div>
    )
  }
}
