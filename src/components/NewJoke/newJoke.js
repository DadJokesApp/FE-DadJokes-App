import React from 'react'

import { newJoke } from '../../actions/newJoke'
import { connect } from 'react-redux'

import { Form, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newJoke: {
        username: '',
        password: '',
        email: '',
      }
    }
  }

  handleInputChange = e => {
    this.setState({
      newJoke: {
        ...this.state.newJoke,
        [e.target.name]: e.target.value
      }
    })
  }

  handleRegister = e => {
    e.preventDefault()
    this.props
      .newJoke(this.state.newJoke)
      .then(() => this.props.addedUser ? this.props.history.push('/home') : alert('User was not successfully added'))
  }
  render() {
    return (
      <div className='signup-wrapper'>
        <Link to='/'>
            <h1 className='heading'>DadJokes</h1>
        </Link>

        <div className='headline'>
            <h2>Please sign up here!</h2>
        </div>

        <Form onSubmit={this.handleRegister}>
          <Input
            type='text'
            name='joke'
            value={this.state.newJoke.joke}
            placeholder='Joke'
            onChange={this.handleInputChange}>
          </Input>

          <Input
            type='text'
            name='punchline'
            value={this.state.newJoke.punchline}
            placeholder='Punchline'
            onChange={this.handleInputChange}>
          </Input>

          <Button className='red'>Sign Up</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps =state => {
    return {
        addedUser: state.addedUser,
    }
}

export default connect(
    mapStateToProps,
    { newJoke }
)(SignUp)