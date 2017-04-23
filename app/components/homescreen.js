import React from 'react'
import Posts from './Posts.js'
import {getAllPosts} from '../server'

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
    getAllPosts((data) => { this.setState({data: data}) })
  }

  render () {
    return (
      <div>
        <div className='container'>
          <div className='row'>

            <div className='col-md-2'>
              <span className='bold'>TAGS</span>
              <li role='presentation'>board games</li>
              <li role='presentation'>sports</li>
              <li role='presentation'>music</li>
              <li role='presentation'>computers</li>
              <li role='presentation'>clothes</li>
              <li role='presentation'>language</li>
              <li role='presentation'>Date</li>
              <p>_/_/_</p>
              <li role='presentation'>Misc</li>
            </div>

            <div className='col-md-7'>
              <span className='bold'>MOST RECENT POSTS</span>
              <div className='panel panel-default'>
                <Posts posts={this.state.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
