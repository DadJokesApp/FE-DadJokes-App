import React from 'react'
import Joke from './joke'

import { Link } from 'react-router-dom'

export default class PrivateJokes extends React.Component {
  render() {
    return (
      <div>
        <Link to='/home'>
          <h2>All jokes component</h2>
        </Link>
        <Joke />
      </div>
    )
  }
}