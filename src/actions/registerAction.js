import axios from 'axios'

import jwt from 'jsonwebtoken'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = newUser => dispatch => {
  console.log("New User: ", newUser)
  dispatch({ type: REGISTER_START })
  return axios
    .post('https://dadjokes-backend.herokuapp.com/api/auth/register', newUser)
    .then(res => {
      const token = res.data.token
      localStorage.setItem('token', token)
      const decodedToken = jwt.decode(token)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          data: res.data,
          user: decodedToken,
          }
      })
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err })
    })
}