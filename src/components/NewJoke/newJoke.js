import React from 'react'
import NavBar from '../Nav/NavBar'
import './newjoke.css'

import { newJoke } from '../../actions/newJoke'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newJoke: {
        joke: '',
        punchline: '',
        user_id: `${this.props.user.id}`,
      }
    }
  }

  handleInputChange = e => {
    this.setState({
      newJoke: {
        ...this.state.newJoke,
        [e.target.name]: e.target.value
      }
    })
  }

  handleRegister = e => {
    e.preventDefault()
    this.props
      .newJoke(this.state.newJoke)
      .then(() => this.props.addedJoke 
        ? this.props.history.push('/home') 
        : alert('Joke was not successfully added'))
  }
  render() {
    return (
      <div className='signup-wrapper'>
        <NavBar />
        <Link to='/home'>
          <img 
            className='profile-pic new-joke-img' 
            src={this.props.user.img_url} 
            alt='profile pic' 
          />
        </Link>
        <div className='new-joke-headline'>
          <h2>Got a new DadJoke? Share it here!</h2>
        </div>
        
        <Form onSubmit={this.handleRegister}>
          <Input
            type='text'
            name='joke'
            value={this.state.newJoke.joke}
            placeholder='Joke'
            onChange={this.handleInputChange}>
          </Input>

          <Input
            type='text'
            name='punchline'
            value={this.state.newJoke.punchline}
            placeholder='Punchline'
            onChange={this.handleInputChange}>
          </Input>

          <Button className='grn'>Post New Joke</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps =state => {
    return {
        newJoke: state.newJoke,
        user: state.user,
        addedJoke: state.addedJoke
    }
}

export default connect(
    mapStateToProps,
    { newJoke }
)(SignUp)