import axios from 'axios'

export const LOGOUT_START = 'DELETE_DATA_START'
export const LOGOUT_SUCCESS = 'DELETE_DATA_SUCCESS'
export const LOGOUT_FAILURE = 'DELETE_DATA_FAILURE'

export const logout = user => dispatch => {
  dispatch({ type: LOGOUT_START })
  axios
      .delete('localhost:5000/api/auth/logout')
      .then(res => {
          dispatch({ 
            type: LOGOUT_SUCCESS, 
            payload: res.data 
          })
      })
      .catch(err => {
          dispatch({ type: LOGOUT_FAILURE, payload: err})
      })
}