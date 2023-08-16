import './App.css';
// import { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
// import { Router } from 'react-router-dom';
import UserWelcome from './components/UserWelcome/UserWelcome'




function App() {
  return (
    <>
      <header>
        <h1>May Flowers Employee Site</h1>
        <p>powered by <strong>weekday</strong></p>
      </header>

 
      <Switch>
        <Route path={`/users/:userId`} component={UserWelcome} /> 
        <Route path='/' component={LoginForm} /> 
      </Switch>


    </>
  );
}

export default App;
