import React from 'react'
import NavBar from '../Nav/NavBar'
import './joke.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughSquint } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { Button } from 'reactstrap'
// import { Link } from 'react-router-dom'
import { getJokeComments } from '../../actions/getJokeComments'
import { getJokeById } from '../../actions/getJokeById'

const laugh = <FontAwesomeIcon icon={faLaughSquint} />
const comment = <FontAwesomeIcon icon={faComment} />

class Joke extends React.Component {
  componentDidMount() {
    this.props.getJokeComments(this.props.match.params.id)
    this.props.getJokeById(this.props.match.params.id)
  }
  render() {
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
                // id={hidden ? 'hidden' : ''}
                // hidden={hidden}
                className='joke-punchline'>
                {this.props.joke.punchline}
              </div>
            </div>
            <Button className='btn-joke'>
              {comment} 56
            </Button>
            <Button className='btn-joke'>{laugh} 56</Button>
            {/* <Button className='btn-joke'>Reveal Punchline!</Button>  */}
            {/* onClick={toggleReveal} */}
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
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      joke: state.joke,
      jokeComments: state.jokeComments,
  }
}

export default connect(
  mapStateToProps,
  { getJokeById, getJokeComments }
)(Joke)