import React from 'react'
import './login.css'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/loginAction'
import { Form, Input, Button } from 'reactstrap'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials: {
        username: '',
        password: '',
      }
    }
  }

	handleInputChange = e => {
		this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
	}

	handleLoginSubmit = e => {
    e.preventDefault()
    console.log(this.props.history)
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/protected'))
  }

  render() {

    return (

      <div className='login-wrapper'>

        <Link to='/'>
          <h1>DadJokes</h1>
        </Link>

        <div className='headline'>
          <h2>Please log-in here!</h2>
        </div>

        <Form onSubmit={this.handleLoginSubmit}>
          <Input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleInputChange}
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleInputChange}
          />

          <Button className='grn'>
            Log in
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect(
  null,
  { login }
)(Login)