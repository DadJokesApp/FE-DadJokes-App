import React from 'react'
// import './update.css'

import { connect } from 'react-redux'
import { getJokeById } from '../../actions/getJokeById'
import { updateJoke } from '../../actions/updateJoke'
import { deleteJoke } from '../../actions/deleteJoke'
import { Form, Input, Button } from 'reactstrap'

class UpdtJk extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedJoke: {
        id: `${this.props.match.params.id}`,
        joke: ``,
        punchline: ``,
        user_id: `${this.props.user.id}`
      }
    }
  }

  componentDidMount() {
    this.props.getJokeById(this.props.match.params.id)
  }

  handleInputChange = e => {
    this.setState({
      updatedJoke: {
        ...this.state.updatedJoke,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props
      .updateJoke(this.state.updatedJoke)
      .then(() => this.state.updatedJoke 
        ? this.props.history.push('/home') 
        : alert('Joke was not successfully updated'))
  }

  render() {
    return (
      <div className='update_form_wrapper'>
        <Form onSubmit={this.handleSubmit}>
          <div className='key_value_pears'> {/* 🔑🍐 */}
            <h5>Joke:</h5>
            <Input 
              type='text'
              name='joke'
              placeholder={this.props.joke.joke}
              value={this.state.updatedJoke.joke}
              onChange={this.handleInputChange}
            />
          </div>
          
          <div className='key_value_pears'> {/* 🔑🍐 */}
            <h5>Punchline:</h5>
            <Input 
              type='text'
              name='punchline'
              placeholder={this.props.joke.punchline}
              value={this.state.updatedJoke.punchline}
              onChange={this.handleInputChange}
            />
          </div>

          <Button className='grn'>Submit Changes</Button>
        </Form>
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
)(UpdtJk)