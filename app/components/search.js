import React from 'react';

import NavBar from './NavBar.js'

class Tagbar extends React.Component {
  render() {
    return (
      <div className="col-md-2 panel panel-default tags">
        <ul className="nav">
          <li role="presentation">TAGS</li>

          <li role="presentation">
            <a href="#">Board Games</a>
          </li>
          <li role="presentation">
            <a href="#">Sports</a>
          </li>
          <li role="presentation">
            <a href="#">Music</a>
          </li>
          <li role="presentation">
            <a href="#">Computers</a>
          </li>
          <li role="presentation">
            <a href="#">Clothes</a>
          </li>
          <li role="presentation">
            <a href="#">Language</a>
          </li>
          
        </ul>
      </div>
    );
  }
}

class Results extends React.Component {
  render() {
    return (
      <div className="col-md-10">
        <div className="panel panel-default">
          <div className="panel-body .search-text">
            <text>Search results for: "</text>
            <text>Tennis</text>
            <text>"</text>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-body .search-text">
            <p>Looking for a tennis buddy! Thursdays at 2:00 would be great.</p>
            <p>Username: TennisLover</p>
            <p>Location: Amherst</p>
            <p>Posted: 2/27/17 12:00</p>
          </div>
        </div>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="clearfix">
          <Tagbar />
          <Results />
        </div>
      </div>
    );
  }
}

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}
