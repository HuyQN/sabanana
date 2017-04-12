import React from 'react'
import Bio from './bio'
import Viewedpost from './viewedpost'

export default class Displaypost extends React.Component {
  render () {
    return (
      <div>

        <div className='container'>

          <div className='row'>

            <Bio />
            <Viewedpost />
            <div className='row'>
              <div className='col-md-4'>
                <div className='btn-group' role='group' aria-label='...'>
                  <button type='button' className='btn btn-default'>Message</button>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='btn-group' role='group' aria-label='...'>
                  <button type='button' className='btn btn-default'>Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
