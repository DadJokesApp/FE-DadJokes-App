import React from 'react'

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
        <Link to='/home'>
          <h2>Update joke form</h2>
        </Link>
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
  }
}

export default connect(
  mapStateToProps,
  { updateJoke, deleteJoke, getJokeById }
)(UpdateJoke)