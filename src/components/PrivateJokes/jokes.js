import React from 'react'

const Jokes = ({ jokes }) => {
  return (
    <div>
      {jokes.map(joke => {
        return (
          <div key={joke.id}>
            <h6>{joke.joke}</h6>
            <h6>{joke.punchline}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default Jokes