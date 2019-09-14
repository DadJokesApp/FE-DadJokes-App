import React from 'react'
import './update.css'

import { connect } from 'react-redux'
import { updateUser } from '../../actions/updateUser'
import { deleteUser } from '../../actions/deleteUser'
import { Form, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class UpdateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedUser: {
        id: `${this.props.user.id}`,
        username: `${this.props.user.username}`,
        password: `${this.props.user.password}`,
        email: `${this.props.user.email}`,
        img_url: `${this.props.user.img_url}`
      }
    }
  }

  handleInputChange = e => {
    this.setState({
      updatedUser: {
        ...this.state.updatedUser,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props
      .updateUser(this.state.updatedUser)
      .then(res => (this.props.history.push('/home')))
  }

  render() {
    const {  user } = this.props
    console.log(user)
    return (
      <div className='update_form_wrapper'>
        <Link to='/home'>
          <h2>Update user form</h2>
        </Link>
        <Form onSubmit={this.handleSubmit}>
          <div className='name_value_pears'> {/* 🔑🍐 */}
            <h5>Username:</h5>
            <Input 
              type='text'
              name='username'
              placeholder='Username'
              value={this.state.updatedUser.username}
              onChange={this.handleInputChange}
            />
          </div>
          
          <div className='name_value_pears'> {/* 🔑🍐 */}
            <h5>Email:</h5>
            <Input 
              type='text'
              name='email'
              placeholder='Email'
              value={this.state.updatedUser.email}
              onChange={this.handleInputChange}
            />
          </div>
          
          <div className='name_value_pears'> {/* 🔑🍐 */}
            <h5>Profile Image URL:</h5>
            <Input 
              type='text'
              name='img_url'
              placeholder='Profile image URL'
              value={this.state.updatedUser.img_url}
              onChange={this.handleInputChange}
            />
          </div>
          <Button>Submit Changes</Button>
        </Form>
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
  { updateUser, deleteUser }
)(UpdateUser)