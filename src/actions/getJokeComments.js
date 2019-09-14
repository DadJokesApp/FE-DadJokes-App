import axios from 'axios'

export const GET_JOKE_COMMENTS_START = 'GET_JOKE_COMMENTS_START'
export const GET_JOKE_COMMENTS_SUCCESS = 'GET_JOKE_COMMENTS_SUCCESS'
export const GET_JOKE_COMMENTS_FAILURE = 'GET_JOKE_COMMENTS_FAILURE'

export const getJokeComments = joke_id => dispatch => {
  dispatch({ type: GET_JOKE_COMMENTS_START })
  axios
    // .get(`http://localhost:4000/api/jokes/${joke_id}/comments`)
    .get(`https://dadjokes-backend.herokuapp.com/api/jokes/${joke_id}/comments`)
    .then(res => {
      dispatch({ type: GET_JOKE_COMMENTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_JOKE_COMMENTS_FAILURE, payload: err })
    })
}