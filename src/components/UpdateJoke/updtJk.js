import React from 'react'
// import './update.css'

import { connect } from 'react-redux'
import { getJokeById } from '../../actions/getJokeById'
import { updateJoke } from '../../actions/updateJoke'
import { deleteJoke } from '../../actions/deleteJoke'
import { Form, Input, Button } from 'reactstrap'
// import { Link } from 'react-router-dom'

class UpdtJk extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedJoke: {
        id: `${this.props.joke.id}`,
        joke: `${this.props.joke.joke}`,
        punchline: `${this.props.joke.punchline}`,
        revealed: `${this.props.joke.revealed}`,
        laughs: `${this.props.joke.laughs}`
      }
    }
  }

  

  componentDidMount() {
    console.log(this.props)
    const result = this.props.getJokeById(this.props.match.params.id)
    // result = async () => await this.props.getJokeById(this.props.match.params.id)
    // console.log(result())
    // console.log(`Jokie joke: ${this.props.joke.joke}`)
    // this.setState({
    //   updatedJoke: {
    //     id: `${this.props.joke.id}`,
    //     joke: `${this.props.joke.joke}`,
    //     punchline: `${this.props.joke.punchline}`,
    //     revealed: `${this.props.joke.revealed}`,
    //     laughs: `${this.props.joke.laughs}`
    //   }
    // })
  }

  
  
  // console.log(result)
  handleInputChange = e => {
    this.setState({
      updatedJoke: {
        ...this.state.updatedJoke,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props
      .updateJoke(this.state.updatedJoke)
      // .then(res => (this.props.history.push('/home')))
    // console.log(this.props.user.id)
  }

  render() {
    // const { joke } = this.props
    console.log(this.props)
    // console.log(this.state.updatedJoke)
    // this.result().then(result => console.log(result))
    return (
      <div className='update_form_wrapper'>
        {  }
        {  }
        <Form onSubmit={this.handleSubmit}>
          <div className='key_value_pears'> {/* 🔑🍐 */}
            <h5>Joke:</h5>
            <Input 
              type='text'
              name='joke'
              placeholder='Joke'
              value={this.state.updatedJoke.joke}
              onChange={this.handleInputChange}
            />
          </div>
          
          <div className='key_value_pears'> {/* 🔑🍐 */}
            <h5>Punchline:</h5>
            <Input 
              type='text'
              name='punchline'
              placeholder='Punchline'
              value={this.state.updatedJoke.punchline}
              onChange={this.handleInputChange}
            />
          </div>

          {/* <div className='key_value_pears'>
            <h5>Revealed:</h5>
            <Input 
              type='text'
              name='revealed'
              placeholder='Revealed'
              value={this.state.updatedJoke.revealed}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='key_value_pears'>
            <h5>Laughs:</h5>
            <Input 
              type='text'
              name='laughs'
              placeholder='Profile image URL'
              value={this.state.updatedJoke.laughs}
              onChange={this.handleInputChange}
            />
          </div> */}

          <Button>Submit Changes</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    joke: state.joke,
  }
}

export default connect(
  mapStateToProps,
  { updateJoke, deleteJoke, getJokeById }
)(UpdtJk)