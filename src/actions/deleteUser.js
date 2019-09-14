import axios from 'axios'

import jwt from 'jsonwebtoken'

export const DELETE_USER_START = 'DELETE_USER_START'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

export const deleteUser = user => dispatch => {
  console.log('User: ', user)
  dispatch({ type: DELETE_USER_START })
  // const headers = {
  //   'Authorization': `${token}`
  // }
  return axios
    // .put('http://localhost:4000/api/auth/register', 
    // user,
    // { headers: user })
    .put('https://dadjokes-backend.herokuapp.com/api/auth/register', 
    user,
    { headers: user })
    .then(res => {
      const token = res.data.token
      localStorage.setItem('token', token)
      const decodedToken = jwt.decode(token)
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: {
          data: res.data,
          user: decodedToken,
          }
      })
    })
    .catch(err => {
      dispatch({ type: DELETE_USER_FAILURE, payload: err })
    })
}