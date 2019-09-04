import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/logoutAction'
import { Button } from 'reactstrap'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials: {
        username: '',
        password: '',
      }
    }
  }

  handleRegister = e => {
    e.preventDefault()
    this.props
      .logout(this.state.credentials)
      .then(() => this.props.addedUser 
        ? this.props.history.push('/landing') 
        : alert('User was not successfully logged out'))
  }

  render() {
    return (
      <div>
        <h1>Welcome to DadJokes!</h1>
        <Button>Logout</Button>
      </div>
    )
  }
}

export default connect(
  null,
  { logout }
)(HomePage)