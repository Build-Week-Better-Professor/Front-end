import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';


import './App.scss';
import DisplayForm from "./Registration/DisplayForm";

function App() {
  return (
    <Router>
    <div className="App">
 falmata-dawano
      <h1>Better Professor App</h1>
      <DisplayForm />
    
      <Header />
      <h1 className="app-title">Better Professor App</h1>
      {/* <Login /> */}
    <div className="main">
      <Switch>
      
      <PrivateRoute exact path="/private"/>
      <Route exact path="/login" component={Login}/>
      {/* <Route exact path="/register"/> */}
      
      </Switch>
    </div>
 master
    </div>
    </Router>
  );
}

export default App;
