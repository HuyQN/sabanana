var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "sabanana";
// Put the initial mock objects here.
var initialData = {
  'user': {
    '1': {
      '_id': "000000000000000000000001",
      'name': 'Bob',
      'bio': 'Train club best club'
    },
    '2': {
      '_id': "000000000000000000000002",
      'name': 'Jill',
      'bio': 'Insert very long text here'
    },
    '3': {
      '_id': "000000000000000000000003",
      'name': 'Jack',
      'bio': 'Jill is very mean'
    },
    '4': {
      '_id': "000000000000000000000004",
      'name': 'La-a',
      'bio': "It's pronounced Ladasha"
    }
  },
  'post': {
    '1': {
      '_id': "000000000000000000000001",
      'authorID': "000000000000000000000002",
      'name': 'Looking Band',
      'description': 'I am looking for a group to create a band with. I know the guitar, and looking for some people that can play the bass or drum, and a singer',
      'tags': ['Music'],
      'date': 1452690900000
    },
    '2': {
      '_id': "000000000000000000000002",
      'authorID': "000000000000000000000003",
      'name': 'Board Games',
      'description': 'Looking for a group of people to play Munchkins with',
      'tags': ['Board Games'],
      'date': 1453690900000
    },
    '3': {
      '_id': "000000000000000000000003",
      'authorID': "000000000000000000000003",
      'name': 'Selling Monopoly',
      'description': 'Selling this disastor of a game. In decent condition, and everything is still here. Pm for price.',
      'tags': ['Selling'],
      'date': 1453830800000
    },
    '4': {
      '_id': "000000000000000000000004",
      'authorID': "000000000000000000000001",
      'name': 'Football',
      'description': 'YO, I need to get my football game on, and need a few fellas to get a game on. We meeting up next Tuesday at 6p.m. to get our game on.',
      'tags': ['Sports'],
      'date': 1454003000000
    },
    '5': {
      '_id': "000000000000000000000005",
      'authorID': "000000000000000000000004",
      'name': 'Trying to buy textbook for econ102',
      'description': 'I need the textbook for econ102, and will only pay $15 for it, no negotiations.',
      'tags': ['Buying'],
      'date': 1454304010000
    }
  },
  thread: {
    1: {
      _id: "000000000000000000000001",
      userIDs: ["000000000000000000000001", "000000000000000000000002"],
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
      _id: "000000000000000000000002",
      userIDs: ["000000000000000000000001", "000000000000000000000003"],
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
      _id: "000000000000000000000003",
      userIDs: ["000000000000000000000002", "000000000000000000000003"],
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

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;
  
  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }
  
  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
