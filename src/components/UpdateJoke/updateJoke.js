import React from 'react'
import NavBar from '../Nav/NavBar'

import { connect } from 'react-redux'
import { getJokeById } from '../../actions/getJokeById'
import { updateJoke } from '../../actions/updateJoke'
import { deleteJoke } from '../../actions/deleteJoke'
import { Link } from 'react-router-dom'
import UpdtJk from './updtJk'

class UpdateJoke extends React.Component {

  componentDidMount() {
    this.props.getJokeById(this.props.match.params.id)
  }

  render() {
    console.log(this.props.location)
    return (
      <div className='update_form_wrapper'>
        <NavBar />
        <div className='profile-bar'>
          <Link to='/home'>
            <img 
              className='profile-pic' 
              src={this.props.user.img_url} 
              alt='profile pic' 
            />
          </Link>
          <Link to='/home'>
            <h2>Update joke form</h2>
          </Link>
        </div>
        <UpdtJk 
          {...this.props}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    joke: state.joke,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { updateJoke, deleteJoke, getJokeById }
)(UpdateJoke)