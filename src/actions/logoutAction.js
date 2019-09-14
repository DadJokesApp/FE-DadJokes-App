import axios from 'axios'

export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_START })
  axios
    // .delete('http://localhost:4000/api/auth/logout')
    .delete('https://dadjokes-backend.herokuapp.com/auth/logout')
    .then(res => {
      dispatch({ 
        type: LOGOUT_SUCCESS, 
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({ type: LOGOUT_FAILURE, payload: err})
    })
}