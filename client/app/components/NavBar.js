import React from 'react'
import {currentUserID} from '../const'
import {
  Link
} from 'react-router-dom'

export default class NavBar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  setSearch (e) {
    e.preventDefault()

    this.setState({search: e.target.value})
  }

  clearSearch () {
    this.setState({search: ''})
  }

  render () {
    var logo = {width: 75, height: 30}
    var navSearch = {width: 485}
    return (
      <div>
        <nav className='navbar navbar-fixed-top navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed navbar-bt' data-toggle='collapse'
                data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <Link to='/' className='navbar-brand' href='home_screen.html'>
                <img src='/img/SabananaLogo.png' style={logo} />
              </Link>
            </div>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <form className='navbar-form navbar-left' role='search'>
                <div className='input-group'>
                  <input type='text' onChange={this.setSearch.bind(this)} value={this.state.search} className='form-control' style={navSearch} placeholder='Search...' />
                  <span className='input-group-btn'>
                    <Link onClick={this.clearSearch.bind(this)} to={'/search/' + this.state.search}>
                      <button type='submit' className='btn btn-default'>
                        <span className='glyphicon glyphicon-search' />
                      </button>
                    </Link>
                  </span>
                </div>
              </form>
              <div className='nav navbar-nav navbar-right'>
                <div className='btn-toolbar pull-right' role='toolbar'>
                  <div className='bt  n-group' role='group'>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-default dropdown-toggle navbar-btn'
                        data-toggle='dropdown'>
                        <span className='glyphicon glyphicon-cog' aria-hidden='true' />
                      </button>
                      <ul className='dropdown-menu'>
                        <li><Link to={`/user/${currentUserID}`}>Profile</Link></li>
                        <li><Link to='/settings/'>User Settings</Link></li>
                        <li><Link to='/messages/'>Messages</Link></li>
                        <li><Link to='/add/'>Create Post</Link></li>
                        <li><a href='#'>Log out</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
