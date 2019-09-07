import React from 'react'
import NavBar from '../Nav/NavBar'
import './home.css'

import { connect } from 'react-redux'
// import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    console.log(`Image URL: ${this.props.user.img_url}`)
    return (
      <div className='home-wrapper'>
        <NavBar />
        <div className='profile-bar'>
          <img className='profile-pic' src={this.props.user.img_url} alt='profile pic' />
          <h3 className='profile-heading'>Welcome to DadJokes, {this.props.user.username}!</h3>
          <div className='profile-links'>
            <Link to='/update-user'>Edit Profile</Link>
            <Link to='/jokes'>Veiw Joke Feed</Link>
          </div>
        </div>
        <div>
          <p>Recent joke feed</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      user: state.user,
  }
}

export default connect(
  mapStateToProps,
  { }
)(HomePage)