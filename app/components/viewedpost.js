import React from 'react'
import {unixTimeToString} from '../util'

export default class Viewedpost extends React.Component {
    render() {
      var theTime = unixTimeToString(this.props.date)
    return (
      <div>
        <div className='col-md-9'>
          <div className='panel panel-default post'>
            <div className='panel-body'>
              <h1><center><strong>{this.props.post.name} by {this.props.post.author}</strong></center></h1>
              <div>{this.props.post.description}</div>
              <span className='text-muted'> at {theTime}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
