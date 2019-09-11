import React from 'react'
import NavBar from '../Nav/NavBar'
import UserJokes from './UserJokes'
import { getUserJokes } from '../../actions/userJokes'
import './home.css'

import { connect } from 'react-redux'
// import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUserJokes(this.props.user.id)
  }
  render() {
    return (
      <div className='home-wrapper'>
        <NavBar />
        <div className='profile-bar'>
          <img className='profile-pic' src={this.props.user.img_url} alt='profile pic' />
          <h3 className='profile-heading'>Welcome to DadJokes, {this.props.user.username}!</h3>
          <div className='profile-links'>
            <Button className='org home-btn'>
              <Link to='/update_user'>Edit Profile</Link>
            </Button>
            <Button className='org home-btn'>
              <Link to='/jokes'>Veiw Joke Feed</Link>
            </Button>
            <Button className='org home-btn'>
              <Link to='/new_joke'>Post A New Joke!</Link>
            </Button>
          </div>
        </div>
        <div>
          <UserJokes user={this.props.user} userJokes={this.props.userJokes} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      user: state.user,
      userJokes: state.userJokes,
  }
}

export default connect(
  mapStateToProps,
  { getUserJokes }
)(HomePage)