import React from 'react'
import {getPost, updatePost} from '../server.js'
import PostForm from './PostForm'

export default class EditPost extends React.Component {
  constructor (props) {
    super(props)
    getPost(this.props.match.params.postID).then(post => this.setState({post}))
    this.state = {
      post: null
    }
  }

  render () {
    if (!this.state.post) {
      return <div>loading</div>
    }
    return (
      <PostForm initial={this.state.post} onSubmit={updatePost} />
    )
  }
}
