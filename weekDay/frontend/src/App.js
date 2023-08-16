import './App.css';
// import { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
import { Router } from 'react-router-dom';




function App() {
  return (
    <>
      <header>
        <h1>May Flowers Employee Site</h1>
        <p>powered by <strong>weekDay</strong></p>
      </header>
    <Router>
      <Switch>
        {/* <Route path='/api/session'> */}
          <LoginForm />
        {/* </Route> */}


      </Switch>


    </Router>

    </>
  );
}

export default App;
