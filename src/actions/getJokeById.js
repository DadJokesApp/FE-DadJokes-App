import axios from 'axios'

export const GET_JOKE_BY_ID_START = 'GET_JOKE_BY_ID_START'
export const GET_JOKE_BY_ID_SUCCESS = 'GET_JOKE_BY_ID_SUCCESS'
export const GET_JOKE_BY_ID_FAILURE = 'GET_JOKE_BY_ID_FAILURE'

export const getJokeById = joke_id => dispatch => {
  dispatch({ type: GET_JOKE_BY_ID_START })
  axios
    .get(`http://localhost:4000/api/jokes/${joke_id}`)
    // .get(`https://dadjokes-backend.herokuapp.com/api/jokes/${joke_id}`)
    .then(res => {
      dispatch({ type: GET_JOKE_BY_ID_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_JOKE_BY_ID_FAILURE, payload: err })
    })
}