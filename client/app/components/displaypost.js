import React from 'react'
import Viewedpost from './viewedpost'
import {getPost} from '../server'
import MessageLink from './MessageLink'
import {currentUserID} from '../const'
import {
  Link
} from 'react-router-dom'

export default class Displaypost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null
    }
    getPost(this.props.match.params.postId).then((post) => this.setState({post}))
  }

  render () {
    if (this.state.post === null) {
      return (
        <div>
          text Loading
      </div>
      )
    }
    return (
      <div>

        <div className='container'>

          <div className='row'>
            <Viewedpost post={this.state.post} />
            <div className='row'>
              <div className='col-md-4'>
                <div className='btn-group' role='group' aria-label='...'>
                  <MessageLink user={this.state.post.author} />
                  {this.state.post.authorID === currentUserID
                    ? <Link to={`/edit/${this.state.post._id}`}>Edit</Link>
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
