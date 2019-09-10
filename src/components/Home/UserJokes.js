import React from 'react'

const UserJokes = ({ userJokes }) => {
  return (
    <div className='joke-wrapper'>
      {userJokes.map(joke => {
        return (
          <div key={joke.id} className='indi-joke'>
            <h6 className='joke'>{joke.username}</h6>
            <img src={joke.img_url} alt='profile pic' />
            <h6 className='joke'>{joke.joke}</h6>
            <h6 className='punchline'>{joke.punchline}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default UserJokes