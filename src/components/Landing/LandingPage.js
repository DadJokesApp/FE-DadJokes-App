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
          <h3>Join dad jokes today!</h3>
          <Link to="/register">
            <Button className='red btn'>Sign up now!</Button>
          </Link>
        </div>
        
        <div className='login'>
          <h3>Already a member?</h3>
          <Link to="/login">
            <Button className='grn btn'>Login here!</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage