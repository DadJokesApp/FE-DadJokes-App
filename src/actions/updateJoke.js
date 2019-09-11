import axios from 'axios'

export const UPDATE_JOKE_START = 'UPDATE_JOKE_START'
export const UPDATE_JOKE_SUCCESS = 'UPDATE_JOKE_SUCCESS'
export const UPDATE_JOKE_FAILURE = 'UPDATE_JOKE_FAILURE'

export const updateJoke = updatedJoke => dispatch => {
  // console.log('User: ', updatedJoke)
  dispatch({ type: UPDATE_JOKE_START })
  return axios
    .put(`http://localhost:4000/api/jokes/${updatedJoke.id}`, updatedJoke)
    // .put('https://dadjokes-backend.herokuapp.com/api/jokes/${updatedJoke.id}`, updatedJoke)
    .then(res => {
      dispatch({
        type: UPDATE_JOKE_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      // console.log(`updated user: ${id}`)
      dispatch({ type: UPDATE_JOKE_FAILURE, payload: err })
    })
}