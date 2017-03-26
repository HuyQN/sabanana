import React from 'react';
import APButtons from './apbuttons.js';

export default class EditPost extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <span className="bold">Title: </span>
          </div>
          <div className="col-md-5 box">
            <div className="form-group text-box">
              <textarea className="form-control" rows="1"
                  placeholder="Insert Title Here">{this.props.title}</textarea>
            </div>
          </div>
        </div>
          <div className="row">
          <div className="col-md-1">
            <span className="bold">Description: </span>
          </div>
          <div className="col-md-7">
            <div className="form-group text-box">
              <textarea className="form-control " rows="6"
                  placeholder="Insert Description Here">{this.props.description}</textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <span className="bold">Tags: </span>
          </div>

          <APButtons />
        </div>

        <div className="row">
          <div className="col-md-7">
            <button type="button" className="btn btn-default">
              Done
            </button>
          </div>
          <div className="col-md-1">
            <button type="button" className="btn btn-default">
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
}
