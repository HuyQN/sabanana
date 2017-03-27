import React from 'react'
import ReactDOM from 'react-dom'

// Each major browser view user interface must be imported.
<<<<<<< HEAD
import Displaypost from './components/displaypost.js'
import AddPost from './components/addpost.js'
import EditPost from './components/editpost.js'
import User from './components/User.js'
import Nav from './components/NavBar.js'
import Bio from './components/bio.js'
import Viewedpost from './components/viewedpost.js'
=======
import AddPost from './components/addpost.js'
import EditPost from './components/editpost.js'
import User from './components/User.js'
import NavBar from './components/NavBar.js'
import Search from './components/search.js'

>>>>>>> 838501dc05c36db329fd372da6a258af0d542195
// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('user') !== null) {
  ReactDOM.render(
    <User />,
    document.getElementById('user')
  );
<<<<<<< HEAD
}  else if (document.getElementById('add-post') !== null) {
=======
} else if (document.getElementById('add-post') !== null) {
>>>>>>> 838501dc05c36db329fd372da6a258af0d542195
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
if (document.getElementById('displaypost') !== null) {
  ReactDOM.render(
    <Displaypost />,
    document.getElementById('displaypost')
  );
}
if (document.getElementById('bio') !== null) {
  ReactDOM.render(
    <Bio />,
    document.getElementById('bio')
  );
}
if (document.getElementById('viewedpost') !== null) {
  ReactDOM.render(
    <Viewedpost />,
    document.getElementById('viewedpost')
  );
}

if (document.getElementById('nav') !== null){
  ReactDOM.render(
    <NavBar />,
    document.getElementById('nav')
  );
}
