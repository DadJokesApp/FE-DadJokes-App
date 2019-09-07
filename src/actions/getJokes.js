import axios from 'axios'

export const GET_JOKES_START = 'GET_JOKES_START'
export const GET_JOKES_SUCCESS = 'GET_JOKES_SUCCESS'
export const GET_JOKES_FAILURE = 'GET_JOKES_FAILURE'

export const getJokes = token => dispatch => {
  dispatch({ type: GET_JOKES_START })
  axios
    .get('http://localhost:4000/api/jokes',
    // .get('https://dadjokes-backend.herokuapp.com/api/jokes')
    { headers: token })
    .then(res => {
        dispatch({ type: GET_JOKES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        if (err.response.status === 403) {
        localStorage.removeItem('token')
        }
        dispatch({ type: GET_JOKES_FAILURE, payload: err })
    })
}