import React from 'react'

import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughSquint } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const laugh = <FontAwesomeIcon icon={faLaughSquint} />
const comment = <FontAwesomeIcon icon={faComment} />

const UserJokes = ({ userJokes }) => {
  return (
    <div className='joke-wrapper'>
      {console.log(userJokes)}
      {userJokes.map(joke => {
        return (
          <div key={joke.id} className='indi-joke'>
            <div className='joke'>
              <div className='joke-meat'>
                <img src={joke.img_url} alt='profile pic' />
                <h6 className='joke-username'>{joke.username}:</h6>
                <div className='joke-joke'>{joke.joke}</div>
              </div>
            </div>

            <div className='reveal'>
              <div className='punchline'>
                <div className='joke-punchline hidden'>{joke.punchline}</div>
              </div>
              <Button>{comment} 5</Button>
              <Button>{laugh} 56</Button>
              <Button href={`/jokes/${joke.id}/update_joke`}>Reveal Punchline!</Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserJokes