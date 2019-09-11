import React from 'react'
import Jokes from './jokes'
import NavBar from '../Nav/NavBar'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getJokes } from '../../actions/getJokes'

class PrivateJokes extends React.Component {
  state = {
    hidden: true,
    joke_id: null
  }

  toggleReveal = this.toggleReveal.bind(this)

  toggleReveal() {
    this.setState({
      hidden: !this.state.hidden
    })
  }

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
          toggleReveal={this.toggleReveal} 
          hidden={this.state.hidden} />
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