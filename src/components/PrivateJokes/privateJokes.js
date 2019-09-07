import React from 'react'
import Joke from './joke'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getJokes } from '../../actions/getJokes'

class PrivateJokes extends React.Component {
  componentDidMount() {
    this.props.getJokes()
  }
  render() {
    console.log(`Jokes: ${this.props.jokes}`)
    console.log(`User ${this.props.user}`)
    return (
      <div>
        <Link to='/home'>
          <h2>All jokes component</h2>
        </Link>
        <Joke jokes={this.props.jokes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    jokes: state.jokes
  }
}

export default connect(
  mapStateToProps,
  { getJokes }
)(PrivateJokes)