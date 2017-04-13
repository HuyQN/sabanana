import React from 'react'

var blist = ['Board Games', 'Sports', 'Music',
  'Studying', 'Video Games', 'Selling',
  'Buying']

export default class AddPost extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.props
    this.extra = []
  }

  handleButtonClick (clickEvent, item) {
    clickEvent.preventDefault()
    if (clickEvent.button === 0) {
      if (document.getElementById(item).className.match(/(?:^|\s)unselected(?!\S)/)) {
        document.getElementById(item).className = 'selected btn tag-buttons'
      } else {
        document.getElementById(item).className = 'unselected btn tag-buttons'
      }
    }
  }

  onEnterPress (keyEvent) {
    if (keyEvent.keyCode == 13) {
      //this.extra[this.extra.length] = document.getElementById('tagArea').value
      //document.getElementById('tagArea').value =""
      document.getElementById("tagArea").value = "";
      return false;
    } else {
      document.getElementById("tagArea").value = document.getElementById("tagArea").value;
      return true;
    }
  }
/*
  handleTitleChange(e){
    e.preventDefault();
    this.setState({this.state.title: e.target.value});
  }

  handleDescChange(e){
    e.preventDefault();
    this.setState({obj.desc: e.target.value});
  }

  handleTagChange(e){
    e.preventDefault();
    this.setState({obj.tag: e.target.value});
  } */

  render () {
    var current = this
    return (
      <div className='container' >
        <div className='row'>
          <div className='col-md-1'>
            <span className='bold'>Title: </span>
          </div>
          <div className='col-md-5 box'>
            <div className='form-group text-box'>
              <textarea className='form-control' rows='1' placeholder='Insert Title Here' value={this.state.title} onChange={(e) => current.handleTitleChange(e)} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-1'>
            <span className='bold'>Description: </span>
          </div>
          <div className='col-md-7'>
            <div className='form-group text-box'>
              <textarea className='form-control ' rows='6' placeholder='Insert Description Here' value={this.state.desc} onChange={(e) => current.handleDescChange(e)} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-1'>
            <span className='bold'>Tags: </span>
          </div>
          <div>
            <div className='col-md-7'>
              {blist.map(function (item, i) {
                return (
                  <input type='button' key={i} id={item} value={item} onClick={(e) => current.handleButtonClick(e, item)} className='btn unselected tag-buttons' />
                )
              })}
              {this.extra.map(function (item, i) {
                return (
                  <input type='button' key={i+blist.length} id={item} value={item} onClick={(e) => current.handleButtonClick(e, item)} className='btn unselected tag-buttons' />
                )
              })}
              <div className='form-group other-box' >
                <input type='text' id='tagArea' className='form-control' onKeyUp={(e) => current.onEnterPress(e)} placeholder='Other Tags' />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <button type='button' className='btn btn-default'>
              Post
            </button>
          </div>
          <div className='col-md-1'>
            <button type='button' className='btn btn-default'>
              Clear All
            </button>
          </div>
          <div className='col-md-1'>
            <button type='button' className='btn btn-default'>
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
}
