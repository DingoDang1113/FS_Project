import './App.css';
// import { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
// import { Router } from 'react-router-dom';
import UserWelcome from './components/UserWelcome/UserWelcome'
import UserForm from './components/UserForm/UserForm';




function App() {
  return (
    <>
      <Switch>
        <Route path='/users/new' component={UserForm} />
        <Route path={`/users/:employeeId`} component={UserWelcome} /> 
        <Route path='/' component={LoginForm} /> 
      </Switch>
    </>
  );
}

export default App;
