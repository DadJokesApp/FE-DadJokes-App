import React from 'react'

import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughSquint } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const laugh = <FontAwesomeIcon icon={faLaughSquint} />
const comment = <FontAwesomeIcon icon={faComment} />

class Jokes extends React.Component {
  render() {
    const { jokes, toggleReveal, hidden } = this.props
    return (
      <div className='joke-wrapper'>
        {jokes.map(joke => {
          return (
            <div>
              <Link to={`/jokes/${joke.id}`} key={joke.id}>
                <div className='joke'>
                  <div className='joke-meat'>
                    <img src={joke.img_url} alt='profile pic' />
                    <h6 className='joke-username'>{joke.username}:</h6>
                    <div className='joke-joke'>{joke.joke}</div>
                  </div>
                </div>
              </Link>
              <div className='reveal'>
                <div className='punchline'>
                  <div 
                    id={hidden ? 'hidden' : ''}
                    hidden={hidden}
                    className='joke-punchline'>
                    {joke.punchline}
                  </div>
                </div>
                <Button>
                  {comment} 58
                </Button>
                <Button>{laugh} 56</Button>
                <Button onClick={toggleReveal}>Reveal Punchline!</Button>
              </div>
            </div>
          )
        })}
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
  { }
)(Jokes)