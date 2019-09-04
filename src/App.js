import React from 'react'
import './App.css'

import { Route } from 'react-router-dom'

import LandingPage from './components/Landing/LandingPage'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import PrivateRoute from './components/Auth/PrivateRoute'
import HomePage from './components/Home/HomePage'

function App() {
  return (
    <div>
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
        path='/register'
        render={props => (
          <Register {...props} />
        )}
      />
      <PrivateRoute
        path="/protected"
        component={HomePage}
      />
    </div>
  )
}

export default App
