import './App.css';
// import { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
// import { Router } from 'react-router-dom';
import UserWelcome from './components/UserWelcome/UserWelcome'
import UserForm from './components/UserForm/UserForm';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound'
import OrgChart from './components/OrgChart/OrgChart';
import HR from './components/HR/HR';
import Manager from './components/Manager/Manager';
import Job from './components/Job/Job';






function App() {
  return (
    <>
      <Switch>
        <Route path={`/users/profile/:employeeId`} component={Profile} /> 
        <Route path={`/users/org-chart/:employeeId`} component={Manager} /> 
        <Route path='/users/org-chart' component={OrgChart} />
        <Route path={`/users/hr-admin`} component={HR} /> 
        <Route path='/users/new' component={UserForm} />
        <Route path={`/users/home`} component={UserWelcome} /> 
        <Route path='/' component={LoginForm} exact />
        <Route path={`/jobs`} component={Job} /> 
        <Route component={NotFound} />
        <Redirect to='/'/> 
      </Switch>

    </>
  );
}

export default App;
