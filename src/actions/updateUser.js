import axios from 'axios'

import jwt from 'jsonwebtoken'

export const UPDATE_USER_START = 'UPDATE_USER_START'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

export const updateUser = id => dispatch => {
  console.log('User ID: ', id)
  dispatch({ type: UPDATE_USER_START })
  return axios
    .put(`http://localhost:4000/api/users/${id}`)
    // .put('https://dadjokes-backend.herokuapp.com/api/auth/register', user)
    .then(res => {
      const token = res.data.token
      localStorage.setItem('token', token)
      const decodedToken = jwt.decode(token)
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          data: res.data,
          user: decodedToken,
          }
      })
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILURE, payload: err })
    })
}