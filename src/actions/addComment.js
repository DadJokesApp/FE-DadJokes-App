import axios from 'axios'

export const ADD_COMMENT_START = 'ADD_COMMENT_START'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const addComment = newComment => dispatch => {
  console.log("New Comment: ", newComment)
  dispatch({ type: ADD_COMMENT_START })
  return axios
    // .post('http://localhost:4000/api/comments', newComment)
    .post('https://dadjokes-backend.herokuapp.com/api/comments', newComment)
    .then(res => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({ type: ADD_COMMENT_FAILURE, payload: err })
    })
}