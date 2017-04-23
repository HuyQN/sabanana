import React from 'react'
import Viewedpost from './viewedpost'
import {getPost} from '../server'
import MessageLink from './MessageLink'

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
