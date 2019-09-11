import axios from 'axios'

export const NEW_JOKE_START = 'NEW_JOKE_START'
export const NEW_JOKE_SUCCESS = 'NEW_JOKE_SUCCESS'
export const NEW_JOKE_FAILURE = 'NEW_JOKE_FAILURE'

export const newJoke = newJoke => dispatch => {
  console.log('New Joke: ', newJoke)
  dispatch({ type: NEW_JOKE_START })
  return axios
    .post('http://localhost:4000/api/jokes', newJoke)
    // .post('https://dadjokes-backend.herokuapp.com/api/auth/register', newUser)
    .then(res => {
      dispatch({
        type: NEW_JOKE_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({ type: NEW_JOKE_FAILURE, payload: err })
    })
}