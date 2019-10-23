import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import DisplayForm from './Registration/DisplayForm';
import Messages from './components/Messages';
import StudentList from './Registration/StudentList';


import './App.scss';

function App() {
  return (
    <Router>
    <div className="App">
 
    
      {/* <Messages /> */}
    
    <div className="main">
      <Switch>
      
      <PrivateRoute exact path="/private" component={StudentList}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={DisplayForm}/>
      
      </Switch>
    </div>
 
    </div>
    </Router>
  );
}

export default App;
