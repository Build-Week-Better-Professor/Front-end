import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

import './App.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Better Professor App</h1>
      <Header />
      <Login />
    <div className="main">
      <Switch>
      
      {/* <PrivateRoute exact path="/private"/> */}
      <Route exact path="/login" component={Login}/>
      {/* <Route exact path="register" /> */}
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
