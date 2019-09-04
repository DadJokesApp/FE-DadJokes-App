import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='landing-wrapper'>
      <div className='turn-this-header-into-a-component'>
        <Link to='/'>
          <h1 className='heading'>DadJokes</h1>
        </Link>
      </div>
      
      <div className='headline'>
        <h4>Got apples?</h4>
      </div>

      <div className='signup'>
        <Link to="/register">
          <button className='red-btn'>Sign up now!</button>
        </Link>
      </div>

      <div className='login-prompt'>
        <p>Already a member?</p>
      </div>

      <div className='login'>
        <Link to="/login">
          <button className='green-btn'>Login here!</button>
        </Link>
      </div>

    </div>
  )
}

export default LandingPage