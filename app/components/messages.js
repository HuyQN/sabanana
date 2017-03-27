import React from 'react';
import MessageFeed from './messagefeed';
import Messageslist from './messageslist';
import NavBar from './NavBar';


export default class Messages extends React.Component {
  render() {
    return (
      <div>
      
        <NavBar />
        <Messageslist />
        <MessageFeed />

      </div>
    )
  }
}