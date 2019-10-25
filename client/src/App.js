import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import StudentList from "./components/StudentList";
import Register from "./components/Register";
import Student from './components/Student';
import Header from "./components/Header";


import './App.scss';
import DisplayForm from "./components/Register";
import StudentForm from './components/StudentsForm';
function App() {
  return (
    <Router>
    <div className="App">
      
    <div className="main">
      <Switch>
      
      <PrivateRoute path="/private" component={StudentList}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/student/:id" component={Student}/>
      
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
