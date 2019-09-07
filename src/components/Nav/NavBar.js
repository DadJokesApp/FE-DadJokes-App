import React from 'react'
import './navbar.css'

import { connect } from 'react-redux'
import { logout } from '../../actions/logoutAction'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  state = {
    active: false
  }

  toggle = this.toggle.bind(this)

  toggle() {
    this.setState({
      active: !this.state.active
    })
  }

  handleLogout = e => {
    e.preventDefault()
    this.props
      .logout()
  }

  render() {
    return (
      <div className='nav-wrapper'>
        <nav className={`${this.state.active ? 'nav' : ''}`}
          active={this.state.active}>
          <div className={`burger-links${this.state.active ? ' logo-center' : ''}`}
            active={this.state.active}
            onClick={this.toggle}>
            <div className={`burger${this.state.active ? ' in-active' : ' active'}`}
              active={this.state.active}
              onClick={this.toggle}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='nav-logo'>
              <Link to='/'>
                <h3>DadJokes</h3>
              </Link>
            </div>
          </div>
          <div className={`burger2${this.state.active ? ' active' : ''}`}
            active={this.state.active}
            onClick={this.toggle}>
            <div className='b2-wrapper'>
              <div className='line'></div>
              <h3>X</h3>
              <div className='line'></div>
            </div>
          </div>
          <div className={`nav-links${this.state.active ? ' active' : ''}`}
            active={this.state.active}>
            <Link to='/home'>Home</Link>
            <Link to='/'>Jokes</Link>
            <div onClick={this.handleLogout} className='nav-logout'>
              <Link to='/login'>
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      user: state.user,
      active: state.active
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(NavBar)