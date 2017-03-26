import React from 'react'
import ReactDOM from 'react-dom'

// Each major browser view user interface must be imported.
import AddPost from './components/addpost.js'
import EditPost from './components/editpost.js'
import User from './components/User.js'
import NavBar from './components/NavBar.js'
import Search from './components/search.js'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('user') !== null) {
  ReactDOM.render(
    <User />,
    document.getElementById('user')
  );
} else if (document.getElementById('add-post') !== null) {
  ReactDOM.render(
    <AddPost />,
    document.getElementById('add-post')
  );
} else if (document.getElementById('edit-post') !== null){
  ReactDOM.render(
    <EditPost title="Current Title" description="Current Description"></EditPost>,
    document.getElementById('edit-post')
  );
} else if (document.getElementById('search') !== null){
  ReactDOM.render(
    <Search />,
    document.getElementById('search')
  );
}

if (document.getElementById('nav') !== null){
  ReactDOM.render(
    <NavBar />,
    document.getElementById('nav')
  );
}
