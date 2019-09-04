import axios from 'axios'

import jwt from 'jsonwebtoken'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
  console.log('Login Creds: ', creds)
  dispatch({ type: LOGIN_START })
  return axios
    .post('https://dadjokes-backend.herokuapp.com/api/auth/login',
    creds,
    { headers: creds })
    .then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        const decodedToken = jwt.decode(token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
            data: res.data,
            user: decodedToken,
            isLoggedIn: true,
            }
        })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}