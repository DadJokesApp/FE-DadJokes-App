import React from 'react'
// import NavBar from '../Nav/NavBar'
// import './home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughSquint } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { Button } from 'reactstrap'
// import { Link } from 'react-router-dom'
import { getJokeComments } from '../../actions/getJokeComments'

const laugh = <FontAwesomeIcon icon={faLaughSquint} />
const comment = <FontAwesomeIcon icon={faComment} />

class Joke extends React.Component {
  componentDidMount() {
    this.props.getJokeComments(this.props.match.params.id)
  }
  render() {
    
    const joke = this.props.jokes.find(
      joke => `${joke.id}` === this.props.match.params.id
    )
    console.log(joke)
    return (
      <div key={this.props.jokes.id} className='indi-joke'>
        <div className='joke'>
          <div className='joke-meat'>
            <img src={this.props.jokeComments.img_url} alt='profile pic' />
            <h6 className='joke-username'>{this.props.jokes.username}:</h6>
            <div className='joke-joke'>{this.props.jokes.joke}</div>
          </div>
        </div>
        <div className='reveal'>
          <div className='punchline'>
            <div 
              // id={hidden ? 'hidden' : ''}
              // hidden={hidden}
              className='joke-punchline'>
              {this.props.jokes.punchline}
            </div>
          </div>
          <Button>
            {comment} 58
          </Button>
          <Button>{laugh} 56</Button>
          <Button>Reveal Punchline!</Button> 
          {/* onClick={toggleReveal} */}
        </div>
        {/* {this.props.jokeComments.map()} */}
        <div className=''>
          <img className='profile-pic' src={this.props.jokeComments.img_url} alt='profile pic' />
          <h6 className='joke-username'>{this.props.jokeComments.username}:</h6>
          <div className='joke-joke'>{this.props.jokeComments.comment}</div>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
      jokes: state.jokes,
      jokeComments: state.jokeComments,
  }
}

export default connect(
  mapStateToProps,
  { getJokeComments }
)(Joke)