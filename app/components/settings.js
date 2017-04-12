import React from 'react';


export default class UserSettings extends React.Component {
  render() {
    return (
      <div>
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
        <br />
      </div>
      </div>
      </div>
</div>
    );
  }
}
