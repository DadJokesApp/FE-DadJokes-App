import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../actions/logoutAction'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

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

  handleLogout = e => {
    e.preventDefault()
    this.props
      .logout(this.state.user)
      .then(() => this.props.logout 
        ? this.props.history.push('/landing') 
        : alert('User was not successfully logged out'))
  }

  render() {
    return (
      <div>
        <h1>Welcome to DadJokes!</h1>
        <Link to='/'>
          <Button>Logout</Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps =state => {
  return {
      user: state.user,
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(HomePage)