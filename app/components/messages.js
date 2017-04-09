import React from 'react';
import MessageFeed from './messagefeed';
import Messageslist from './messageslist';



export default class Messages extends React.Component {
  render() {
    return (
      <div>


        <div classname="col-md-2 fb-right-sidebar">
        	<Messageslist />
        </div>
        <div classname="col-md-10">
        	<MessageFeed />
        </div>

      </div>
    )
  }
}
