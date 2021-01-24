import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainDashboard from './containers/MainDashboard/MainDashboard'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import { AuthProvider } from './contexts/AuthContext'


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <MainDashboard />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
