import axios from 'axios'

export const GET_JOKES_START = 'GET_JOKES_START'
export const GET_JOKES_SUCCESS = 'GET_JOKES_SUCCESS'
export const GET_JOKES_FAILURE = 'GET_JOKES_FAILURE'

export const getJokes = ()  => dispatch => {
  dispatch({ type: GET_JOKES_START })
  axios
    .get('http://localhost:4000/api/jokes')
    // .get('https://dadjokes-backend.herokuapp.com/api/jokes')
    .then(res => {
        console.log(res.data)
        dispatch({
          type: GET_JOKES_SUCCESS,
          payload: res.data
        })
    })
    .catch(err => {
        dispatch({ type: GET_JOKES_FAILURE, payload: err })
    })
}