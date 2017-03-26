import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">

              <img alt="Brand" src="img/logo.png" height="36px" />
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">


            <div className="nav navbar-nav navbar-right">
              <div className="btn-toolbar pull-right" role="toolbar">
                <div className="btn-group" role="group">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default dropdown-toggle navbar-btn"
                            data-toggle="dropdown">
                      <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href="#">Profile</a></li>
                      <li><a href="#">User Settings</a></li>
                      <li><a href="#">Messages</a></li>
                      <li><a href="#">Log out</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <form className="navbar-form navbar-right" role="search">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search Sabanana" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </form>

          </div>
        </div>
      </nav>
    );
  }
}
