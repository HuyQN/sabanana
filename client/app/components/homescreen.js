import React from 'react'
import Posts from './Posts.js'
import {getAllPosts, getTags} from '../server'

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      tags: []
    }
    getAllPosts().then((data) => { this.setState({data: data}) })
    getTags().then((data) => {this.setState({tags: [...data]}) })
  }

  render () {
    return (
      <div>
        <div className='container'>
          <div className='row'>

            <div className='col-md-2'>
              <span className='bold'>TAGS</span>
              {this.state.tags.map(function(tag){
                return(
                  <li role='presentation'>{tag}</li>
                )
              })}
              <p>_/_/_</p>
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
