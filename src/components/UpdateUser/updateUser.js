import React from 'react'
import './update.css'

import { Form, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class UpdateUser extends React.Component {
  render() {
    return (
      <div>
        <Link to='/home'>
          <h2>Update user form</h2>
        </Link>
        <Form>
          <Input 
            type='text'
            placeholder='Username'
          />
          <Input 
            type='text'
            placeholder='Email'
          />
          <Input 
            type='text'
            placeholder='Profile image URL'
          />
          <Button>Submit Changes</Button>
        </Form>
      </div>
    )
  }
}