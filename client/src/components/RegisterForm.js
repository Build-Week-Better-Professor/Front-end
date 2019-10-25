import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const StyledForm = styled.form`
width: 50%;
height: 70vh;
margin: auto 100px;
padding: 32px;
font-weight: bold;
background-color: #F8F9F7;
color: #223F68;
box-shadow: 0 0 10px 5px lightgray;
display: flex;
flex-direction: column;
justify-content: space-evenly;

input {
    margin-bottom: 28px;
    padding: 0.5rem;
    font-size: 16px;
    width: 96%;
    display: block;
    color: #223F68;
}
label {
    display: flex;
    text-align: start;
    justify-content: end;
    
}
button {
  max-width: 100%;
  width: 250px;
  margin: 20px 0;
  padding: 12px 20px;
  border-style: none;
  background-color: #457B9D;
  box-shadow: 0px 2px 2px lightgray;
  font-size: 25px;
  font-weight: 500;
  color: #F8F9F7;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  display: flex;
  align-self: center;
}
`;
const RegisterForm = () => {
    // gets data from form
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    });
    // stores real time change in the form input
    const changeHandler = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      console.log(event.target.value);
    };

    // sends form data to state via the state function passed down 
    const submitForm = event => {
      event.preventDefault();
      setFormData({ username: "", password: "", first_name: "", last_name: "",});
      axios.post('https://better-professor-backend.herokuapp.com/users/register', formData) 
              .then(res => console.log(res.data) )
              .catch(err => console.log(err.response));
    }
  
    return (
      <StyledForm onSubmit={submitForm}>
          <label htmlFor="username">Username</label>
          <input 
              name="username" 
              id="username" 
              type="text" 
              placeholder="new username..." 
              onChange={changeHandler}
              value={formData.username}
              required/>
          <label htmlFor="password">Password</label>
          <input 
              name="password" 
              id="password" 
              type="password" 
              placeholder="new password..." 
              onChange={changeHandler}
              value={formData.password}
              required/>
          <label htmlFor="first_name">First Name</label>
        <input 
              name="first_name" 
              id="first_name" 
              type="text" 
              placeholder="first name..." 
              onChange={changeHandler}
              value={formData.first_name}
              required/>
        <label htmlFor="last_name">Last Name</label>
        <input 
              name="last_name" 
              id="last_name" 
              type="text" 
              placeholder="last name..." 
              onChange={changeHandler}
              value={formData.last_name}
              required/>
        <button type="submit" >Register</button>
      </StyledForm>
    );
  };

  export default RegisterForm;