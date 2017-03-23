import React from 'react'
import ReactDOM from 'react-dom'

// Each major browser view user interface must be imported.
import User from './components/user.js'
import UI02 from './components/ui-02.js'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('user') !== null) {
  ReactDOM.render(
    <User />,
    document.getElementById('user')
  )
} else if (document.getElementById('ui-02') !== null) {
  ReactDOM.render(
    <UI02 />,
    document.getElementById('ui-02')
  )
}
