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
          {this.props.tags.map((tag) => {
             return(
               <li role="presentation">
                 <a href="#">
                   {tag}
                 </a>
               </li>
             )})}
        </ul>
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
  constructor(props) {
    super(props)
    this.state = {
      tags: ["Board Games", "Sports", "Music", "Computers", "Clothing", "Language"]
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="clearfix">
          <Tagbar tags={this.state.tags} />
          <SearchResults search_term={this.props.match.params.query}>
            <Posts posts={posts} />
          </SearchResults>
        </div>
      </div>
    );
  }
}
