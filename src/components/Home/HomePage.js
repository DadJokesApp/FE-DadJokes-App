import React from 'react'
import './home.css'

import { connect } from 'react-redux'
import { logout } from '../../actions/logoutAction'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  // constructor(props) {
    // super(props)
  //   this.state = {

  //   }
  // }

  handleLogout = e => {
    e.preventDefault()
    this.props
      .logout()
      // .then(() => this.props.history.push('/landing'))
  }

  render() {
    console.log(`Image URL: ${this.props.user.img_url}`)
    return (
      <div className='home-wrapper'>
        <h1>Welcome to DadJokes, {this.props.user.username}!</h1>
        <div className='logout-btn'>
            <Button onClick={this.handleLogout} className='red btn'>
              <Link to='/login'>
                Logout
              </Link>
            </Button>
          
        </div>
        <div className='profile-bar'>
          <img className='profile-pic' src={this.props.user.img_url} alt='profile pic' />
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      user: state.user,
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(HomePage)