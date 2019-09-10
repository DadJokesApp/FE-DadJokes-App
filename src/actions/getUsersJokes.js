import axios from 'axios'

export const GET_USER_JOKES_START = 'GET_USER_JOKES_START'
export const GET_USER_JOKES_SUCCESS = 'GET_USER_JOKES_SUCCESS'
export const GET_USER_JOKES_FAILURE = 'GET_USER_JOKES_FAILURE'

export const getJokes = userId  => dispatch => {
  dispatch({ type: GET_USER_JOKES_START })
  axios
    .get(`http://localhost:4000/api/jokes`)
    // .get('https://dadjokes-backend.herokuapp.com/api/jokes')
    .then(res => {
        console.log(res.data)
        dispatch({
          type: GET_USER_JOKES_SUCCESS,
          payload: res.data
        })
    })
    .catch(err => {
        dispatch({ type: GET_USER_JOKES_FAILURE, payload: err })
    })
}