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

import {
  GET_JOKES_START,
  GET_JOKES_SUCCESS,
  GET_JOKES_FAILURE,
} from '../actions/getJokes'

import {
  GET_PUBLIC_START,
  GET_PUBLIC_SUCCESS,
  GET_PUBLIC_FAILURE,
} from '../actions/publicJokes'

import {
  GET_USER_JOKES_START,
  GET_USER_JOKES_SUCCESS,
  GET_USER_JOKES_FAILURE,
} from '../actions/userJokes'

import {
  GET_JOKE_COMMENTS_START,
  GET_JOKE_COMMENTS_SUCCESS,
  GET_JOKE_COMMENTS_FAILURE,
} from '../actions/getJokeComments'

import {
  GET_JOKE_BY_ID_START,
  GET_JOKE_BY_ID_SUCCESS,
  GET_JOKE_BY_ID_FAILURE,
} from '../actions/getJokeById'

import {
  UPDATE_JOKE_START,
  UPDATE_JOKE_SUCCESS,
  UPDATE_JOKE_FAILURE,
} from '../actions/updateJoke'

import {
  NEW_JOKE_START,
  NEW_JOKE_SUCCESS,
  NEW_JOKE_FAILURE,
} from '../actions/newJoke'

import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../actions/addComment'

import jwt from 'jsonwebtoken'

const initialState = {
  error: '',
  isLoggedIn: false,
  isLoggingIn: false,
  token: localStorage.getItem('token'),
  user: jwt.decode(localStorage.getItem('token')),
  // token: null,
  // user: null,
  jokes: [],
  joke: [],
  publicJokes: [],
  jokeComments: [],
  newJoke: [],
  userJokes: [],
  newComment: [],
  addingUser: false,
  addedUser: false,
  active: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  gettingJokes: false,
  gotJokes: false,
  gettingJoke: false,
  gotJoke: false,
  addingJoke: false,
  addedJoke: false,
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
        error: action.payload,
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
        error: action.payload,
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
        error: action.payload,
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
        error: action.payload,
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
        error: action.payload,
      }

    // Get all jokes 😆
    case GET_JOKES_START:
      return {
        ...state,
        gettingJokes: true,
        gotJokes: false,
        error: '',
      }

    case GET_JOKES_SUCCESS:
      return {
        ...state,
        gettingJokes: false,
        gotJokes: true,
        jokes: action.payload,
        error: '',
      }

    case GET_JOKES_FAILURE:
      return {
        ...state,
        error: '',
      }

    // Get public jokes 😆
    case GET_PUBLIC_START:
      return {
        ...state,
        gettingJokes: true,
        gotJokes: false,
        error: '',
      }

    case GET_PUBLIC_SUCCESS:
      return {
        ...state,
        gettingJokes: false,
        gotJokes: true,
        publicJokes: action.payload,
        error: '',
      }

    case GET_PUBLIC_FAILURE:
      return {
        ...state,
        error: '',
      }

    // GET user jokes
    case GET_USER_JOKES_START:
      return {
        ...state,
        gettingJokes: true,
        gotJokes: false,
        error: '',
      }

    case GET_USER_JOKES_SUCCESS:
      return {
        ...state,
        gettingJokes: false,
        gotJokes: true,
        userJokes: action.payload,
        error: '',
      }

    case GET_USER_JOKES_FAILURE:
      return {
        ...state,
        error: '',
      }

    // GET joke comments
    case GET_JOKE_COMMENTS_START:
      return {
        ...state,
        gettingComments: true,
        gotComments: false,
        error: '',
      }

    case GET_JOKE_COMMENTS_SUCCESS:
      return {
        ...state,
        gettingComments: false,
        gotComments: true,
        jokeComments: action.payload,
        error: '',
      }

    case GET_JOKE_COMMENTS_FAILURE:
      return {
        ...state,
        error: '',
      }

    // GET joke by ID
    case GET_JOKE_BY_ID_START:
      return {
        ...state,
        gettingJoke: true,
        gotJoke: false,
        error: '',
      }

    case GET_JOKE_BY_ID_SUCCESS:
      return {
        ...state,
        gettingJoke: false,
        gotJoke: true,
        joke: action.payload,
        error: '',
      }

    case GET_JOKE_BY_ID_FAILURE:
      return {
        ...state,
        error: '',
      }

      // Update joke 💁
    case UPDATE_JOKE_START:
      return {
        ...state,
        updating: true,
        updated: false,
        error: '',
      }
    case UPDATE_JOKE_SUCCESS:
      return {
        ...state,
        updating: false,
        updated: true,
        joke: action.payload,
        error: '',
      }
    case UPDATE_JOKE_FAILURE:
      return {
        ...state,
        updated: false,
        error: action.payload,
      }

    // New joke reducer 🦆
    case NEW_JOKE_START:
      return {
        ...state,
        addingJoke: true,
        addedJoke: false,
        error: '',
      }
    case NEW_JOKE_SUCCESS:
      return {
        ...state,
        addingJoke: false,
        addedJoke: true,
        newJoke: action.payload,
        error: '',
      }
    case NEW_JOKE_FAILURE:
      return {
        ...state,
        addedJoke: false,
        error: action.payload,
      }

    // Add comment reducer 🦆
    case ADD_COMMENT_START:
      return {
        ...state,
        addingComment: true,
        addedComment: false,
        error: '',
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addingComment: false,
        addedComment: true,
        newComment: action.payload,
        error: '',
      }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addedComment: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default rootReducer