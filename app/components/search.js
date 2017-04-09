import React from 'react';
import Posts from './Posts.js'

var posts = [{
  date: 'February 1, 2017',
  name: 'Catan fun!',
  tags: [{
    name: 'board-games'
  }, {
    name: 'fun!'
  }]
}, {
  date: 'February 23, 2017',
  name: 'yeah lots of sports i love sports',
  tags: [{
    name: 'good-old-times'
  }, {
    name: 'getting-down-to-it'
  }]
}]

class Tagbar extends React.Component {
  render() {
    return (
      <div className="col-md-2 panel panel-default tags">
        <ul className="nav">
          <li role="presentation">TAGS</li>

          {React.Children.map(this.props.children, function(child) {
             return (
               <li role="presentation">
                 <a href="#">
                   {child.props.tag}
                 </a>
               </li>
             )
           })}

        </ul>
      </div>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body .search-text">
          <p>{this.props.text}</p>
          <p>Username: {this.props.username}</p>
          <p>Location: {this.props.location}</p>
          <p>Posted: {this.props.post_date}</p>
        </div>
      </div>
    );
  }
}

class SearchResults extends React.Component {
  render() {
    return (
      <div className="col-md-10">
        <div className="panel panel-default">
          <div className="panel-body .search-text">
            <text>Search results for: "{this.props.search_term}"</text>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default class Search extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="clearfix">
          <Tagbar>
            <p tag="Board Games" />
            <p tag="Sports" />
            <p tag="Music" />
            <p tag="Computers" />
            <p tag="Clothes" />
            <p tag="Language" />
          </Tagbar>
          <SearchResults search_term={this.props.match.params.query}>
            <Posts posts={posts} />
          </SearchResults>
        </div>
      </div>
    );
  }
}
