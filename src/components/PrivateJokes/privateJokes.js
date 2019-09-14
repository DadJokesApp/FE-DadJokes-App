import React from 'react'
import Jokes from './jokes'
import NavBar from '../Nav/NavBar'
import './jokes.css'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getJokes } from '../../actions/getJokes'

class PrivateJokes extends React.Component {
  componentDidMount() {
    this.props.getJokes()
  }
  
  render() {
    return (
      <div className='private-jokes-wrapper'>
        <NavBar />
        <Link to='/home'>
          <h2>All jokes component</h2>
        </Link>
        <Jokes 
          jokes={this.props.jokes} 
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes,
  }
}

export default connect(
  mapStateToProps,
  { getJokes }
)(PrivateJokes)