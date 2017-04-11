import {readDocument, writeDocument, addDocument} from './database.js'

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn (data, cb) {
  setTimeout(() => {
    cb(data)
  }, 4)
}

export function getAllPosts(cb) {
  var data = [];
  for (var i = 1; i < 6; i++){
    data.push(readDocument("posts", i));
  }
  emulateServerReturn(data, cb);
}
