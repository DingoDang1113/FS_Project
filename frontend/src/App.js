import './App.css';
// import { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
// import { Router } from 'react-router-dom';
import UserWelcome from './components/UserWelcome/UserWelcome'
import UserForm from './components/UserForm/UserForm';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound'





function App() {
  return (
    <>
      <Switch>
        <Route path={`/users/:employeeId/profile`} component={Profile} /> 
        <Route path='/users/new' component={UserForm} />
        <Route path={`/users/:employeeId`} component={UserWelcome} /> 
        <Route path='/' component={LoginForm} exact />
        <Route component={NotFound} />
        <Redirect to='/'/> 
      </Switch>

    </>
  );
}

export default App;
