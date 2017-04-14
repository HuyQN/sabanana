import React from 'react'
import Bio from './bio'
import Viewedpost from './viewedpost'
import Posts from './Posts.js';
import {getPost} from '../server';


export default class Displaypost extends React.Component {
  constructor(props) {
  super(props);
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

            <Bio />
            <Viewedpost post = {this.state.post}/>
            <div className='row'>
              <div className='col-md-4'>
                <div className='btn-group' role='group' aria-label='...'>
                  <button type='button' className='btn btn-default'>Message</button>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='btn-group' role='group' aria-label='...'>
                  <button type='button' className='btn btn-default'>Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
