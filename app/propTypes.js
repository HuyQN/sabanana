import {PropTypes} from 'react'

export const user = {
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string
}

export const message = {
  authorID: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
}

export const thread = {
  _id: PropTypes.number.isRequired,
  userIDs: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape(message).isRequired
  ).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape(message).isRequired
  ).isRequired
}
