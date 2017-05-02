import {PropTypes} from 'react'

export const user = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string
})

export const message = PropTypes.shape({
  authorIndex: PropTypes.number.isRequired,
  author: user.isRequired,
  content: PropTypes.string.isRequired
})

export const thread = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  currentUserIndex: PropTypes.number.isRequired,
  userIDs: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  users: PropTypes.arrayOf(
    user.isRequired
  ).isRequired,
  messages: PropTypes.arrayOf(
    message.isRequired
  ).isRequired
})

export const post = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  authorID: PropTypes.string.isRequired,
  author: user.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  date: PropTypes.number.isRequired
})
