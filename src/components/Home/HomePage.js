import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/logoutAction'
import { Button } from 'reactstrap'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
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