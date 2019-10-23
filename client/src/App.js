import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import StudentList from "./components/StudentList";


import './App.scss';
import DisplayForm from "./components/DisplayForm";
function App() {
  return (
    <Router>
    <div className="App">
    
      <Header />
      <h1 className="app-title">Better Professor App</h1>
      {/* <Login /> */}
    <div className="main">
      <Switch>
      
      <PrivateRoute path="/private" component={StudentList}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={DisplayForm}/>
      
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
