import React from 'react'
import {getUser} from '../server'
import {unixTimeToString} from '../util'

function Tag ({name}) {
  return <a href='#'><em className='text-info'>{name}</em></a>
}

function Tags ({tags}) {
  return (
    <span className='tags'>
      {tags.map(Tag)}
    </span>
  )
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: ""
    }
  }

  render() {
    getUser(this.props.authorID).then((user) => {this.setState({author: user.name})})
    console.log(this.state.author)
    var convertedTime = unixTimeToString(this.props.date)
    return (
      <li>
        <a>{this.props.name} by {this.state.author}</a>
        <span className='text-muted'> at {convertedTime}</span>
        <p>{this.props.description}</p>
        <Tags tags={this.props.tags} />
      </li>
    )
  }
}

function PostHeader () {
  return (
    <div className='panel-heading'>
      <h2 className='panel-title'>
        Posts
      </h2>
    </div>
  )
}

export default function Posts ({posts, includeHeader}) {
  return (
    <div className='panel panel-default'>
      { includeHeader ? <PostHeader /> : null }
      <div className='panel-body'>
        <ul className='list-unstyled posts'>
          {posts.map((post) => {
             return(
               <Post authorID={post.authorID}
                     name={post.name}
                     description={post.description}
                     tags={post.tags}
                     date={post.date} />)})}
        </ul>
      </div>
    </div>
  )
}
