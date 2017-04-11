import React from 'react'

export default class Messageslist extends React.Component {
  render () {
    return (
      <div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='media-left media-top'>
                  PIC
              </div>
            <div className='media-body'>
              <a href='#'>Someone</a>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='media-left media-top'>
              PIC
            </div>
              <div className='media-body'>
                <a href='#'>Someone else</a>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='media-left media-top'>
                    PIC
                </div>

                  <div className='media-body'>
                    <a href='#'>Someone #3</a>
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
