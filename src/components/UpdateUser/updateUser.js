import React from 'react'
import './update.css'

import { connect } from 'react-redux'
import { updateUser } from '../../actions/updateUser'
import { deleteUser } from '../../actions/deleteUser'
import { Form, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class UpdateUser extends React.Component {

  handleChange = e => {
    this.setState({
      // user: {
        // this.props.user,
        [e.target.name]: e.target.value
      // }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .updateUser(this.props.user.id)
      .then(res => (res ? this.props.history.push("/home") : null))
    console.log(this.props.user.id)
  }

  render() {
    // const {  user } = this.props
    // console.log(user)
    return (
      <div>
        <Link to='/home'>
          <h2>Update user form</h2>
        </Link>
        <Form onSubmit={this.handleSubmit}>
          <Input 
            type='text'
            name='username'
            placeholder='Username'
            // value={user.username}
            onChange={this.handleChange}
          />
          <Input 
            type='text'
            name='email'
            placeholder='Email'
            // value={user.email}
            onChange={this.handleChange}
          />
          <Input 
            type='text'
            name='img_url'
            placeholder='Profile image URL'
            // value={user.img_url}
            onChange={this.handleChange}
          />
          <Input 
            type='text'
            name='password'
            placeholder='Password'
            // value={user.password}
            onChange={this.handleChange}
          />
          <Button>Submit Changes</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // updating: state.updating,
    // updated: state.updated,
    // deleting: state.deleting,
    // deleted: state.deleted,
    user: state.user,
  }
}

export default connect(
  mapStateToProps,
  { updateUser, deleteUser }
)(UpdateUser)