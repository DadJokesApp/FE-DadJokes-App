import axios from 'axios'

import jwt from 'jsonwebtoken'

export const UPDATE_USER_START = 'UPDATE_USER_START'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

export const updateUser = updatedUser => dispatch => {
  console.log('User: ', updatedUser)
  dispatch({ type: UPDATE_USER_START })
  return axios
    // .put(`http://localhost:4000/api/users/${updatedUser.id}`, updatedUser)
    .put(`https://dadjokes-backend.herokuapp.com/api/users/${updatedUser.id}`, updatedUser)
    .then(res => {
      const token = res.data.token
      console.log(`Token: ${res.data.user}`)
      localStorage.setItem('token', token)
      const decodedToken = jwt.decode(token)
      console.log(`Data: ${decodedToken}`)
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