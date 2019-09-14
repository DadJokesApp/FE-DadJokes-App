import React from 'react'
import NavBar from '../Nav/NavBar'
import './joke.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughSquint } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { Button, Input, Form } from 'reactstrap'
import { getJokeComments } from '../../actions/getJokeComments'
import { getJokeById } from '../../actions/getJokeById'
import { addComment } from '../../actions/addComment'

const laugh = <FontAwesomeIcon icon={faLaughSquint} />
const comment = <FontAwesomeIcon icon={faComment} />

class Joke extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      newComment: {
        joke_id: `${this.props.match.params.id}`,
        user_id: `${this.props.user.id}`,
        comment: ``,
      }
    }
  }

  handleInputChange = e => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        [e.target.name]: e.target.value
      }
    })
  }

  handleAddComment = e => {
    e.preventDefault()
    this.props
      .addComment(this.state.newComment)
      .then(() => this.props.getJokeComments(this.props.match.params.id))
      .then(() => this.setState({ newComment: {comment: ''} }))
    
  }

  componentDidMount() {
    this.props.getJokeComments(this.props.match.params.id)
    this.props.getJokeById(this.props.match.params.id)
  }

  render() {
    console.log(this.props.jokeComments.length)
    return (
      <div className='private-jokes-wrapper' key={this.props.joke.id}>
        <NavBar />
        <div className='indi-joke'>
          <div className='joke'>
            <div className='joke-meat'>
              <img src={this.props.joke.img_url} alt='profile pic' />
              <h6 className='joke-username'>{this.props.joke.username}:</h6>
              <div className='joke-joke'>{this.props.joke.joke}</div>
            </div>
          </div>
          <div className='reveal'>
            <div className='punchline'>
              <div 
                className='joke-punchline'>
                {this.props.joke.punchline}
              </div>
            </div>
            <Button className='btn-joke'>
              {comment} {this.props.jokeComments.length}
            </Button>
            <Button className='btn-joke'>{laugh} {this.props.joke.laughs}</Button>
          </div>
          {this.props.jokeComments.map(comment => {
            return (
              <div className='comment' key={comment.id}>
                <img className='comment-pic' src={comment.img_url} alt='profile pic' />
                <h6 className='comment-username'>{comment.username}:</h6>
                <div className='comment-comment'>{comment.comment}</div>
              </div>
            )
          })}
          <Form 
            onSubmit={this.handleAddComment} 
            className='leave-a-comment'>
            <img 
              src={this.props.user.img_url} 
              alt='profile pic' 
              className='comment-pic'
            />
            <Input 
              type='text'
              name='comment'
              placeholder='Leave a comment . . .'
              onChange={this.handleInputChange}
              value={this.state.newComment.comment}
            />
            <Button>Comment</Button>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(`State: `, state.joke)
  return {
      joke: state.joke,
      jokeComments: state.jokeComments,
      user: state.user
  }
}

export default connect(
    mapStateToProps,
  { getJokeById, getJokeComments, addComment }
)(Joke)