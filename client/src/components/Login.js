import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import Header from './Header';


const Login = props => {
    console.log('LOGIN', props);
 const [input, setInput] = useState({ username: '', password: '' })
 
 const handleChange = event => {
    setInput({
   ...input,
   [event.target.name]: event.target.value
    })
  }


const login = event => {
    event.preventDefault();

    axiosWithAuth()
    .post(`/users/login`, input)
    .then(res => { 
        localStorage.setItem('token', res.data.token);
        props.history.push('/private')
    })
      .catch(err => console.log(err.reponse))
    };

    if (localStorage.getItem('token')) {
        return <Redirect to='/private' />
    }
    
    return (
    <> 
    <Header />
    <h1 className="app-title">Better Professor App</h1>
     <div className="login-form-div"> 
     
      <h1 className="login-title">Log In</h1>

        <form onSubmit={login}>
        
        

        <input 
        type= 'text'
        value={input.username}
        name='username'
        placeholder='...enter username'
        onChange={handleChange}
        />
      
        <input 
        type='password'
        value={input.password}
        name='password'
        placeholder='...enter password'
        onChange={handleChange}
        />
        <button className="login-button">LOG IN</button>
        
        <div className="create-acct">
        <Link className="acct-link" to="/register">Create an Account</Link>
        </div>
        </form> 
        </div>
        </>  
       )
}
export default Login;
