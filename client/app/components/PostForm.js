import React, {PropTypes} from 'react'

export default class PostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.props.initial
  }

  changeName (event) {
    event.preventDefault()
    this.setState({name: event.target.value})
  }

  changeDescription (event) {
    event.preventDefault()
    this.setState({description: event.target.value})
  }

  changeTags (event) {
    event.preventDefault()
    this.setState({tags: event.target.value.split(',')})
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state).then(({_id}) =>
      this.context.router.history.push(`/post/${_id}`)
    )
  }

  render () {
    return (
      <div className='container' >
        <div className='row'>
          <div className='col-md-1'>
            <span className='bold'>Name: </span>
          </div>
          <div className='col-md-5 box'>
            <div className='form-group text-box'>
              <textarea className='form-control' id='titleArea' rows='1' placeholder='Insert Name Here' value={this.state.name} onChange={this.changeName.bind(this)} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-1'>
            <span className='bold'>Description: </span>
          </div>
          <div className='col-md-7'>
            <div className='form-group text-box'>
              <textarea className='form-control' id='descArea' rows='6' placeholder='Insert Description Here' value={this.state.description} onChange={this.changeDescription.bind(this)} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-1'>
            <span className='bold'>Tags: </span>
          </div>
          <div>
            <div className='col-md-7'>
              <div className='form-group other-box' >
                <input type='text' id='tagArea' className='form-control' value={this.state.tags.join(',')} onChange={this.changeTags.bind(this)} placeholder='Tags' />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <button type='button' className='btn btn-default' onClick={this.onSubmit.bind(this)}>
                      Post
                    </button>
          </div>
        </div>
      </div>
    )
  }
}

PostForm.propTypes = {
  initial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }),
  onSubmit: PropTypes.func.isRequired
}

PostForm.defaultProps = {
  initial: {
    name: '',
    description: '',
    tags: []
  }
}

PostForm.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
      createHref: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
}
