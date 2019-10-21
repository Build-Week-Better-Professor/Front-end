import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';


const Login = props => {
 const [input, setInput] = useState({username: '', password: ''})
 
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
        localStorage.setItem('token', res.data.payload);
        props.history.push('/private')
    })
      .catch(err => console.log(err.reponse))
    };

    if (localStorage.getItem('token')) {
        return <Redirect to='private' />
    }

    return (

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
        <button>Log In</button>
        </form>   
       )
}
export default Login;
