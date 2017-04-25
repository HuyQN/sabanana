import React from 'react'
import ReactDOM from 'react-dom'

// Modify with your startup's name!
var startupName = 'sabanana'

// Put your mock objects here, as in Workshop 4
var initialData = {
  'user': {
    '1': {
      '_id': 1,
      'name': 'Bob',
      'bio': 'Train club best club'
    },
    '2': {
      '_id': 2,
      'name': 'Jill',
      'bio': 'Insert very long text here'
    },
    '3': {
      '_id': 3,
      'name': 'Jack',
      'bio': 'Jill is very mean'
    },
    '4': {
      '_id': 4,
      'name': 'Ladecha',
      'bio': "It's pronounces Ladasha"
    }
  },
  'post': {
    '1': {
      '_id': 1,
      'authorID': 2,
      'name': 'Looking Band',
      'description': 'I am looking for a group to create a band with. I know the guitar, and looking for some people that can play the bass or drum, and a singer',
      'tags': ['Music'],
      'date': 1452690900000
    },
    '2': {
      '_id': 2,
      'authorID': 3,
      'name': 'Board Games',
      'description': 'Looking for a group of people to play Munchkins with',
      'tags': ['Board Games'],
      'date': 1453690900000
    },
    '3': {
      '_id': 3,
      'authorID': 3,
      'name': 'Selling Monopoly',
      'description': 'Selling this disastor of a game. In decent condition, and everything is still here. Pm for price.',
      'tags': ['Selling'],
      'date': 1453830800000
    },
    '4': {
      '_id': 4,
      'authorID': 1,
      'name': 'Football',
      'description': 'YO, I need to get my football game on, and need a few fellas to get a game on. We meeting up next Tuesday at 6p.m. to get our game on.',
      'tags': ['Sports'],
      'date': 1454003000000
    },
    '5': {
      '_id': 5,
      'authorID': 4,
      'name': 'Trying to buy textbook for econ102',
      'description': 'I need the textbook for econ102, and will only pay $15 for it, no negotiations.',
      'tags': ['Buying'],
      'date': 1454304010000
    }
  },
  thread: {
    1: {
      _id: 1,
      userIDs: [1, 2],
      messages: [{
        authorIndex: 0,
        content: 'hey'
      }, {
        authorIndex: 1,
        content: 'whats up'
      }, {
        authorIndex: 0,
        content: 'Still wanna hit that tennis ball later?'
      }]
    },
    2: {
      _id: 2,
      userIDs: [1, 3],
      messages: [{
        authorIndex: 0,
        content: 'hey'
      }, {
        authorIndex: 1,
        content: 'whats up'
      }, {
        authorIndex: 0,
        content: 'Still wanna hit that soccer ball later?'
      }]
    },
    3: {
      _id: 3,
      userIDs: [2, 3],
      messages: [{
        authorIndex: 0,
        content: 'hey'
      }, {
        authorIndex: 1,
        content: 'whats up'
      }, {
        authorIndex: 0,
        content: 'one is lame'
      }]
    }
  }
}

var data = JSON.parse(localStorage.getItem(startupName))
if (data === null) {
  data = JSONClone(initialData)
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument (collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id])
}

export function readCollection (collection) {
  return JSONClone(data[collection])
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument (collection, changedDocument) {
  var id = changedDocument._id
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument)
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data))
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument (collectionName, newDoc) {
  var collection = data[collectionName]
  var nextId = Object.keys(collection).length
  while (collection[nextId]) {
    nextId++
  }
  newDoc._id = nextId
  writeDocument(collectionName, newDoc)
  return newDoc
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase () {
  localStorage.setItem(startupName, JSON.stringify(initialData))
  data = JSONClone(initialData)
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render () {
    return (
      <button className='btn btn-default' type='button' onClick={() => {
        resetDatabase()
        window.alert('Database reset! Refreshing the page now...')
        document.location.reload(false)
      }}>Reset Mock DB</button>
    )
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
)
