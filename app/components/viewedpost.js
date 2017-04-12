import React from 'react'

export default class Viewedpost extends React.Component {
  render () {
    return (
      <div>
        <div className='col-md-9'>
          <div className='panel panel-default post'>
            <div className='panel-body'>
              <h1><center><strong>Selected Post Title</strong></center></h1>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ligula ex, et elementum enim sagittis et. Cras cursus at eros a lacinia. Aliquam erat volutpat. Maecenas pulvinar malesuada quam eget tempus. Nulla egestas
                scelerisque sem consectetur ornare. Praesent suscipit tempor odio, luctus luctus est rhoncus nec. Vivamus dapibus urna sodales nunc posuere malesuada. Phasellus blandit tellus et augue cursus, eu ornare felis venenatis. Aenean
                cursus nisl a eros condimentum feugiat. Nullam iaculis dapibus ante, sed hendrerit elit molestie ac.</p>
              <h3><left>Tags</left></h3>
              <span className='tags'><a href='#'><em className='text-info'> sports</em></a></span>
              <span className='tags'><a href='#'><em className='text-info'> games</em></a></span>
              <span className='tags'><a href='#'><em className='text-info'> outdoors</em></a></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
