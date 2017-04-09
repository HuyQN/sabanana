import React from 'react'

export default class NavBar extends React.Component {
  render() {
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
            <a className='navbar-brand' href='#'>
              <img src='img/SabananaLogo.png' style={logo}/>
            </a>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <form className='navbar-form navbar-left' role='search'>
              <div className='input-group'>
                <input type='text' className='form-control' style = {navSearch} placeholder='Search...' />
                <span className='input-group-btn'>
                  <button type='submit' className='btn btn-default'>
                    <span className='glyphicon glyphicon-search' />
                  </button>
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
                      <li><a href='#'>Profile</a></li>
                      <li><a href='#'>User Settings</a></li>
                      <li><a href='#'>Messages</a></li>
                      <li><a href='#'>Create Post</a></li>
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
