import React from 'react'

const blist = ['Board Games', 'Sports', 'Music',
  'Studying', 'Video Games', 'Selling',
  'Buying']

export default class Buttons extends React.Component {
  render () {
    return (
      <div>
        <div className='col-md-7'>
          {blist.map(function (item) {
            return (
              <button type='button' className='btn btn-default tag-buttons'>
                {item}
              </button>
            )
          })}
          <div className='form-group other-box' >
            <input type='text' className='form-control' placeholder='Other Tags' />
          </div>
        </div>
      </div>
    )
  }
}
