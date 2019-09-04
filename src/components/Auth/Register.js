import React from 'react'
import { register } from '../../actions/registerAction'
import { connect } from 'react-redux'

import { Form, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: {
        username: '',
        password: '',
        email: '',
      }
    }
  }

  handleInputChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    })
  }

  handleRegister = e => {
    e.preventDefault()
    this.props
      .register(this.state.newUser)
      .then(() => this.props.addedUser ? this.props.history.push('/login') : alert('User was not successfully added'))
  }
  render() {
    return (
      <div className='landing-wrapper'>
        <Link to='/'>
            <h1 className='heading'>DadJokes</h1>
        </Link>

        <div className='headline'>
            <h4>Please sign up here!</h4>
        </div>

        <Form onSubmit={this.handleRegister}>
          <Input
            type='text'
            name='username'
            value={this.state.newUser.username}
            placeholder='Username'
            onChange={this.handleInputChange}>
          </Input>

          <Input
            type='text'
            name='email'
            value={this.state.newUser.email}
            placeholder='Email'
            onChange={this.handleInputChange}>
          </Input>

          <Input
            type='password'
            name='password'
            value={this.state.newUser.password}
            placeholder='Password'
            onChange={this.handleInputChange}>
          </Input>

          <Button>Register</Button>
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
    { register }
)(Register)