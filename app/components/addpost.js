import React from 'react'
import {
  Link
} from 'react-router-dom'

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

  handleClearAll(clickEvent){
    clickEvent.preventDefault()
    if(clickEvent.button === 0){
      document.getElementById("titleArea").value ="";
      document.getElementById("descArea").value="";
      document.getElementById("tagArea").value="";
      this.extra = [];
      blist.map(function(item){
          document.getElementById(item).className = 'unselected btn tag-buttons';
      })
      this.setState({title: ""})
    }
  }

  onPostClick(clickEvent){
    var fTitle = document.getElementById("titleArea").value;
    var fDesc = document.getElementById("descArea").value;
    var tags = getTagList();
  }

  getTagList(){
    var results =[];
    blist.map(function(item){
      if(document.getElementById(item).className.match(/(?:^|\s)selected(?!\S)/)){
        results[results.length] = item;
      }
    })
    this.extra.map(function(item){
      if(document.getElementById(item).className.match(/(?:^|\s)selected(?!\S)/)){
        results[results.length] = item;
      }
    })
    return results;
  }

  onEnterPress(keyEvent) {
    if (keyEvent.keyCode == 13) {
      //this.extra[this.extra.length] = document.getElementById('tagArea').value
      //document.getElementById('tagArea').value =""
      var word = document.getElementById("tagArea").value;
      if(blist.lastIndexOf(word) == -1 && this.extra.lastIndexOf(word) == -1){
          this.extra[this.extra.length] = document.getElementById("tagArea").value;
      } else{
          document.getElementById(word).className = 'selected btn tag-buttons';
      }
      this.setState({title: this.state.title});
      document.getElementById("tagArea").value = "";
      return false;
    } else {
      return true;
    }
  }

  handleTitleChange(keyEvent){
    if(keyEvent.keyCode == 13){
      keyEvent.preventDefault();
      return false;
    }
  }

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
              <textarea className='form-control' id="titleArea" rows='1' placeholder='Insert Title Here' onKeyDown={(e) => current.handleTitleChange(e)} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-1'>
            <span className='bold'>Description: </span>
          </div>
          <div className='col-md-7'>
            <div className='form-group text-box'>
              <textarea className='form-control' id="descArea" rows='6' placeholder='Insert Description Here' />
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
            <button type='button' onClick={(e) => this.handleClearAll(e)} className='btn btn-default'>
              Clear All
            </button>
          </div>
          <div className='col-md-1'>
            <Link to='/'>
              <button type='button' onClick={(e) => this.onPostClick(e)} className='btn btn-default'>
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
