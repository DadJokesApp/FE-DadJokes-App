import React from 'react'
import './App.css'

import { Route } from 'react-router-dom'

import LandingPage from './components/Landing/LandingPage'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import PrivateRoute from './components/Auth/PrivateRoute'
import HomePage from './components/Home/HomePage'
import PrivateJokes from './components/PrivateJokes/privateJokes'
import UpdateUser from './components/UpdateUser/update'
import UpdateJoke from './components/UpdateJoke/updateJoke'
import Joke from './components/Joke/joke'
import NewJoke from './components/NewJoke/newJoke'

function App() {
  return (
    <div className='app'>
      <Route
        path='/'
        exact
        component={LandingPage}
      />
      <Route
        path='/login'
        render={props => (
          <Login {...props} />
        )}
      />
      <Route
        path='/signup'
        render={props => (
          <SignUp {...props} />
        )}
      />
      <PrivateRoute
        path="/protected"
        component={HomePage}
      />
      <Route
        path='/home'
        render={props => (
          <HomePage {...props} />
        )}
      />
      <Route
        path='/jokes'
        exact
        render={props => (
          <PrivateJokes {...props} />
        )}
      />
      <Route
        path='/jokes/:id'
        exact
        render={props => (
          <Joke {...props} />
        )}
      />
      <Route
        path='/update_user'
        render={props => (
          <UpdateUser {...props} />
        )}
      />
      <Route
        path='/jokes/:id/update_joke'
        // exact
        render={props => (
          <UpdateJoke {...props} />
        )}
      />
      <Route
        path='/new_joke'
        render={props => (
          <NewJoke {...props} />
        )}
      />
    </div>
  )
}

export default App
