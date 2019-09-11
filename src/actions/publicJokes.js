import axios from 'axios'

export const GET_PUBLIC_START = 'GET_PUBLIC_START'
export const GET_PUBLIC_SUCCESS = 'GET_PUBLIC_SUCCESS'
export const GET_PUBLIC_FAILURE = 'GET_PUBLIC_FAILURE'

export const getPublicJokes = () => dispatch => {
  dispatch({ type: GET_PUBLIC_START })
  axios
    .get('http://localhost:4000/api/jokes/public')
    // .get('https://dadjokes-backend.herokuapp.com/api/jokes/public')
    .then(res => {
      dispatch({ type: GET_PUBLIC_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_PUBLIC_FAILURE, payload: err })
    })
}

