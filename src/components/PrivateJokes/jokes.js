import React from 'react'

const Jokes = ({ jokes }) => {
  return (
    <div className='joke-wrapper'>
      {jokes.map(joke => {
        return (
          <div key={joke.id} className='indi-joke'>
            <h6 className='joke'>{joke.joke}</h6>
            <h6 className='punchline'>{joke.punchline}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default Jokes