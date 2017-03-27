import React from 'react';
import NavBar from './NavBar';

export default class UserSettings extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      <div className="panel panel-default fb-status-update-entry">
        <div className="panel-body">
          <a href="#"><h3 className="glyphicon glyphicon-user"></h3><font size="+2"><strong> User Settings</strong></font></a>
          <div className="media">
            <br />
          <a href="#"><span className="glyphicon glyphicon-pencil">
          </span><font size="+1"><strong> Change Username</strong></font></a>
            <br />
            <br />
            <br />
          <a href="#"><span className="glyphicon glyphicon-pencil">
          </span><font size="+1"><strong> Change Password</strong></font></a>
            <br />
            <br />
            <br />
          <a href="#"><span className="glyphicon glyphicon-pencil">
          </span><font size="+1"><strong> Edit Avatar</strong></font></a>
            <br />
            <br />
            <br />
          <a href="#"><span className="glyphicon glyphicon-pencil">
          </span><font size="+1"><strong> Edit Bio</strong></font></a>
            <br />
            <br />
            <br />
          <a href="#"><span className="glyphicon glyphicon-pencil">
          </span><font size="+1"><strong> Add / Edit / Delete Posts</strong></font></a>
      </div>
      </div>
      </div>
</div>
    );
  }
}
