import React from 'react'
import NavBar from '../Nav/NavBar'
import UserJokes from './UserJokes'
import { getUserJokes } from '../../actions/userJokes'
import './home.css'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class HomePage extends React.Component {
  state = {
    updateJoke: {
      joke: '',
      punchline: ''
    }
  }

  componentDidMount() {
    this.props.getUserJokes(this.props.user.id)
  }

  handleSubmit() {
    this.setState({
      updateJoke: {
        joke: `${this.props.joke.joke}`,
        punchline: `${this.props.joke.punchline}`
      }
    })
  }
  render() {
    return (
      <div className='home-wrapper'>
        <NavBar />
        <div className='profile-bar'>
          <img 
            className='profile-pic' 
            src={this.props.user.img_url} 
            alt='profile pic' 
          />
          <h3 className='profile-heading'>Welcome to DadJokes, {this.props.user.username}!</h3>
          <div className='profile-links'>
            <Button className='edit-profile-btn'>
              <Link to='/update_user'>Edit Profile</Link>
            </Button>
            <Button className='view-jokes-btn'>
              <Link to='/jokes'>View Joke Feed</Link>
            </Button>
            <Button className='post-joke-btn'>
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