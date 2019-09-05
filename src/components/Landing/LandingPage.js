import React from 'react'

import './landing.css'

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='landing-wrapper'>
      <div className='heading'>
        <Link to='/'>
          <h1>DadJokes</h1>
        </Link>
      </div>
      <div className='top-bar'>
        <div className='signup'>
          <h2>Join dad jokes today!</h2>
          <Link to="/signup">
            <Button className='red'>Sign up now!</Button>
          </Link>
        </div>
        
        <div className='login'>
          <h2>Already a member?</h2>
          <Link to="/login">
            <Button className='grn'>Login here!</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage