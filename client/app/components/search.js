import React from 'react';
import Posts from './Posts.js';
import {getAllPosts, getTags} from '../server';

class Tagbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tags,
      selected_tags: this.props.selected_tags
    }
  }

  handleSelect(tag) {
    this.state.tags.delete(tag)
    this.state.selected_tags.add(tag)
    this.setState({});
  }

  handleDeselect(tag) {
    this.state.selected_tags.delete(tag)
    this.state.tags.add(tag)
    this.setState({});
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.tags = nextProps.tags;
    nextState.selected_tags = nextProps.selected_tags;
  }

  render() {
    return (
      <div className="col-md-2 panel panel-default tags">
      <ul className="nav">
      <li role="presentation">TAGS</li>
      {[...this.state.selected_tags].map((tag) => {
        return(
          <li role="presentation">
          <label type="button" className="btn btn-default active" onClick={() => this.handleDeselect(tag)}>
          {tag}
          </label>
          </li>
        )})}
      {[...this.state.tags].map((tag) => {
        return(
          <li role="presentation">
          <label type="button" className="btn btn-default" onClick={() => this.handleSelect(tag)}>
          {tag}
          </label>
          </li>
        )})}
      </ul>
      </div>
    )
  }
}

class SearchResults extends React.Component {
  render () {
    return (
      <div className='col-md-10'>
      <div className='panel panel-default'>
      <div className='panel-body .search-text'>
      <text>Search results for: "{this.props.search_term}"</text>
      </div>
      </div>
      {this.props.children}
      </div>
    )
  }
}

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: new Set(),
      /* Always start with no selected tags*/
      selected_tags: new Set(),
      data: []
    }
    getTags().then((tags) => {this.setState({tags: new Set(tags)}) })
    getAllPosts().then((data) => { this.setState({data: data}) })
  }

  render() {
    return (
      <div className="container-fluid">
      <div className="clearfix">
      <Tagbar tags={this.state.tags} selected_tags={this.state.selected_tags} />
      <SearchResults search_term={this.props.match.params.query}>
      <Posts posts={this.state.data} />
      </SearchResults>
      </div>
      </div>
    )
  }
}
