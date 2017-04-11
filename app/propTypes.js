import {PropTypes} from 'react'

export const user = PropTypes.shape({
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string
})

export const message = PropTypes.shape({
  authorID: PropTypes.number.isRequired,
  author: user.isRequired,
  content: PropTypes.string.isRequired
})

export const thread = PropTypes.shape({
  _id: PropTypes.number.isRequired,
  userIDs: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired,
  users: PropTypes.arrayOf(
    user.isRequired
  ).isRequired,
  messages: PropTypes.arrayOf(
    message.isRequired
  ).isRequired
})
