import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Each major browser view user interface must be imported.

import Displaypost from './components/displaypost.js'
import AddPost from './components/addpost.js'
import EditPost from './components/editpost.js'
import User from './components/User.js'
import NavBar from './components/NavBar.js'
import Bio from './components/bio.js'
import Viewedpost from './components/viewedpost.js'
import Search from './components/search.js'
import UserSettings from './components/settings.js'
import Messages from './components/messages.js'
import HomeScreen from './components/homescreen.js'

function App () {
  return (
    <Router>
      <div>
        <NavBar />

        <Route exact path='/' component={HomeScreen} />
        <Route path='/user/:userID' component={User} />
        <Route path='/messages/' component={Messages} />
        <Route path='/add/' component={AddPost} />
        <Route path='/settings/' component={UserSettings} />
        <Route path='/edit/:postId' component={AddPost} />
        <Route path='/search/:query' component={Search} />
        <Route path='/post/:postId' component={Displaypost}/>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
