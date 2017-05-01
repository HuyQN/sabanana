import React from 'react'
import {Link} from 'react-router-dom'

export default class UserSettings extends React.Component {

  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleBio = this.handleBio.bind(this);
  }

  handleName(event){
    event.preventDefault();
    var userName = this.state.value.trim();
    if (userName !== "") {
     this.setState({value: ""});
      }
    }

  handleNameChange(event){
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleBio(event){
    event.preventDefault();
    var bio = this.state.value.trim();
    if(bio !==""){
      this.setState({value:""});
    }
  }

  handleBioChange(event){
    event.preventDefault();
    this.setState({value: event.target.value});
  }



  render () {
    return (
      <div>
        <div className='panel panel-default fb-status-update-entry'>
          <div className='panel-body'>
            <h3 className='glyphicon glyphicon-user' /><font size='+2'><strong> User Settings</strong></font>
            <div className='media'>
              <br />
              <label>
              <span className='glyphicon glyphicon-pencil' /><font size='+1'><strong> Change Username</strong></font>
              <br /><input type ="text" value = {this.state.value} onChange={this.handleNameChange} />
                <button type="button" className="btn btn-default" onClick={(event) => this.handleName(event)}>
                  Submit
                </button>
              </label>
              <br />
              <br />
              <label>
              <span className='glyphicon glyphicon-pencil' /><font size='+1'><strong> Edit Bio</strong></font>
                <br /><input type ="textarea" value = {this.state.value} onChange={this.handleBioChange} />
                  <button type="button" className="btn btn-default" onClick={(event) => this.handleBio(event)}>
                    Submit
                  </button>
              </label>
              <br />
              <br />
              <Link to = '/add/'>
              <span className='glyphicon glyphicon-pencil' /><font size='+1'><strong> Add Post</strong></font>
              </Link>
              <br />
              <br />
              <br />
              <Link to = '/edit/:postID'>
              <span className='glyphicon glyphicon-pencil' /><font size='+1'><strong> Edit / Delete Posts</strong></font>
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
