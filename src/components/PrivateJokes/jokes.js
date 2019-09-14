import React from 'react'
import './jokes.css'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

class Jokes extends React.Component {
  render() {
    const { jokes } = this.props
    
    return (
      <div className='joke-wrapper'>
        {jokes.map(joke => {
          return (
            <div key={joke.id} className='jokes-wrapper'>
              { console.log(`Revealed: ${joke.revealed}`) }
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
                <Button 
                  href={`/jokes/${joke.id}`}
                  className='btn-jokes'>
                  Reveal Punchline!
                </Button>
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