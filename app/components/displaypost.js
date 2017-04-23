import React from 'react'
import Viewedpost from './viewedpost'
import {getPost} from '../server'
import MessageLink from './MessageLink'
import{getBio} from './server'
import {getUser} from './server'

export default class Displaypost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null,
      author: "",
      bio: null
    }
    getPost(this.props.match.params.postId).then((post) => this.setState({post}))
    getUser(this.props.authorID).then((user) => {this.setState({author: user.name})})
    getBio(this.props.match.params.authorID).then((bio)=>this.setState({bio}))

  }

  render () {
    if (this.state.post === null) {
      return (
        <div>
          text Loading
      </div>
      )
    }

if(this.state.bio === null) {
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
          <Bio bio= {this.state.bio}/>
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
