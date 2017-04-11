import React from 'react'

export default class Thread extends React.Component {
  render () {
    return (
      <div>

        <div className='panel-footer'>

          <ul className='media-list'>
            <li className='media'>
              <div className='media-left media-top'>
                PIC
              </div>
              <div className='media-body'>
                <a href='#'>Someone Else</a>: Are you still looking for a tennis partner?
              </div>
            </li>

            <li className='media'>
              <div className='media-left media-top'>
                PIC
              </div>
              <div className='media-body'>
                <a href='#'>You</a>: yes i am
              </div>
            </li>

            <li className='media'>
              <div className='media-left media-top'>
                PIC
            </div>
              <div className='media-body'>
                <a href='#'>Someone Else</a>: how about tuesday?
            </div>
            </li>

            <li className='media'>
              <div className='media-left media-top'>
                PIC
              </div>
              <div className='media-body'>
                <a href='#'>You</a>: sounds good
              </div>
            </li>

            <li className='media'>
              <div className='media-left media-top'>
                PIC
              </div>
              <div className='media-body'>
                <div className='input-group'>
                  <input type='text' className='form-control'
                    placeholder='Write a message...' />
                  <span className='input-group-btn'>
                    <button className='btn btn-default' type='button'>
                      <span className='glyphicon glyphicon-ok' />
                    </button>
                  </span>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}
