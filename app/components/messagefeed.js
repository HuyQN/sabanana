import React from 'react';

export default class MessageFeed extends React.Component {
  render() {
    return (
      <div>
        <div classname="col-md-10">
          <div classname="panel-footer">
        
           <ul classname="media-list">
            <li classname="media">
              <div classname="media-left media-top">
                PIC
              </div>
              <div classname="media-body">
                <a href="#">Someone Else</a>: Are you still looking for a tennis partner?
              </div>
            </li>
            <li classname="media">
              <div classname="media-left media-top">
                PIC
              </div>
              <div classname="media-body">
                <a href="#">You</a>: yes i am
              </div>
            </li>
            <li classname="media">
              <div classname="media-left media-top">
                PIC
            </div>
            <div classname="media-body">
              <a href="#">Someone Else</a>: how about tuesday?
            </div>
            </li>
            <li classname="media">
              <div classname="media-left media-top">
                PIC
              </div>
              <div classname="media-body">
                <a href="#">You</a>: sounds good
              </div>
            </li>
            <li classname="media">
              <div classname="media-left media-top">
                PIC
              </div>
              <div classname="media-body">
                <div classname="input-group">
                  <input type="text" classname="form-control"
                         placeholder="Write a message..."/>
                  <span classname="input-group-btn">
                    <button classname="btn btn-default" type="button">
                      <span classname="glyphicon glyphicon-ok"></span>
                    </button>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    )
  }
}