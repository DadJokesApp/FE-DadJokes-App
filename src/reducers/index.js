import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/loginAction'

import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions/registerAction'

import {
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/logoutAction'

import {
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../actions/updateUser'

import {
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from '../actions/deleteUser'

import jwt from 'jsonwebtoken'

const initialState = {
  error: '',
  isLoggedIn: false,
  isLoggingIn: false,
  token: localStorage.getItem('token'),
  user: jwt.decode(localStorage.getItem('token')),
  addingUser: false,
  addedUser: false,
  active: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {

    // Login Reducer 🦎
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        error: '',
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.data.token,
        isLoggingIn: false,
        isLoggedIn: true,
        error: '',
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: 'FAILED to login',
      }

    // Register reducer 🦆
    case REGISTER_START:
      return {
        ...state,
        addingUser: true,
        addedUser: false,
        error: '',
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        addingUser: false,
        addedUser: true,
        user: action.payload.user,
        token: action.payload.data.token,
        error: '',
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        addedUser: false,
        error: 'FAILED to register',
      }

    // Logout reducer 🚀
    case LOGOUT_START:
      return {
        ...state,
        loggingOut: true,
        loggedOut: false,
        error: '',
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        loggedOut: true,
        user: action.payload,
        error: '',
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: 'Logout failed',
      }

    // Update user 💁
    case UPDATE_USER_START:
      return {
        ...state,
        updating: true,
        updated: false,
        error: '',
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updating: false,
        updated: true,
        user: action.payload.user,
        token: action.payload.data.token,
        error: '',
      }
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updated: false,
        error: 'FAILED to register',
      }

    // Delete user
    case DELETE_USER_START:
      return {
        ...state,
        updating: true,
        updated: false,
        error: '',
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        updating: false,
        updated: true,
        user: action.payload.user,
        token: action.payload.data.token,
        error: '',
      }
    case DELETE_USER_FAILURE:
      return {
        ...state,
        updated: false,
        error: 'FAILED to register',
      }

    default:
      return state
  }
}

export default rootReducer