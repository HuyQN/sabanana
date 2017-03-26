import React from 'react'
import ReactDOM from 'react-dom'

// Each major browser view user interface must be imported.
import UI01 from './components/ui-01.js';
import UI02 from './components/ui-02.js';
import AddPost from './components/addpost.js'
import EditPost from './components/editpost.js'
import User from './components/User.js'
import Nav from './components/NavBar.js'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('user') !== null) {
  ReactDOM.render(
    <User />,
    document.getElementById('user')
  );
} else if (document.getElementById('ui-02') !== null) {
  ReactDOM.render(
    <UI02 />,
    document.getElementById('ui-02')
  );
} else if (document.getElementById('add-post') !== null) {
  ReactDOM.render(
    <AddPost />,
    document.getElementById('add-post')
  );
} else if(document.getElementById('edit-post') !== null){
  ReactDOM.render(
    <EditPost title="Current Title" description="Current Description"></EditPost>,
    document.getElementById('edit-post')
  );
}

if(document.getElementById('nav') !== null){
  ReactDOM.render(
    <Nav />,
    document.getElementById('nav')
  );
}
