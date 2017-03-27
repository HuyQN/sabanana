import React from 'react';

export default class Messageslist extends React.Component {
  render() {
    return (
      <div>
        <div classname="col-md-2 fb-right-sidebar">
          <div classname="row">
            <div classname="col-md-12">
              <div classname="media-left media-top">
                  PIC
              </div>
            <div classname="media-body">
              <a href="#">Someone</a>
            </div>
          </div>
        </div>

        <div classname="row">
          <div classname="col-md-12">
            <div classname="media-left media-top">
              PIC
            </div>
            <div classname="media-body">
              <a href="#">Someone else</a>
            </div>
          </div>
        </div>

          
        <div classname="row">
          <div classname="col-md-12">
            <div classname="row">
              <div classname="col-md-12">
                <div classname="media-left media-top">
                    PIC
                </div>
                
                <div classname="media-body">
                  <a href="#">Someone #3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}