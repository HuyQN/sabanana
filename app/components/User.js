import React from 'react'
import {getUser} from '../server'
import Posts from './Posts'
//import {user} from '../propTypes'
import getUsersPosts from '../server.js'
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
          <div className='col-xs-4'>
            <div className='thumbnail'>
              <img src={'http://placehold.it/350x350'} />
              <div className='caption'>
                <h1>{this.state.user.name}</h1>
                <p>{this.state.user.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}