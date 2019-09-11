import React from 'react'

import { connect } from 'react-redux'
import { getJokeById } from '../../actions/getJokeById'
import { updateJoke } from '../../actions/updateJoke'
import { deleteJoke } from '../../actions/deleteJoke'
// import { Form, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import UpdtJk from './updtJk'

class UpdateJoke extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     updatedJoke: {
  //       id: `${this.props.joke.id}`,
  //       joke: `${this.props.joke.joke}`,
  //       punchline: `${this.props.joke.punchline}`,
  //       revealed: `${this.props.joke.revealed}`,
  //       laughs: `${this.props.joke.laughs}`
  //     }
  //   }
  // }

  componentDidMount() {
    this.props.getJokeById(this.props.match.params.id)
  }

  render() {
    // const {  joke } = this.props
    // console.log(joke)
    return (
      <div className='update_form_wrapper'>
        {/* { console.log(this.state.updatedJoke) } */}
        {/* { console.log(this.props.joke.joke) } */}
        <Link to='/home'>
          <h2>Update joke form</h2>
        </Link>
        <UpdtJk 
          // {...props} 
          // handleInputChange={this.handleInputChange}
          // handleSubmit={this.handleSubmit}
          // joke={this.props.joke} 
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