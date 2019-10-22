import React, {useState} from "react";
import styled from "styled-components";

const Register = () => {
    // gets data from form
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      role: ""
    });
    // stores real time change in the form input
    const changeHandler = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      console.log(event.target.value);
    };

    // sends form data to state via the state function passed down 
    // from PostUsers as props
    const submitForm = event => {
      event.preventDefault();
      setFormData({ firstName: "", lastName: "", email: "", password: ""});
    }
    const StyledForm = styled.form`
    width: 50%;
    height: 70vh;
    margin: auto 100px;
    padding: 32px;
    font-weight: bold;
    background-color: #F8F9F7;
    color: #223F68;
    box-shadow: 2px 2px 10px 10px #223F68;
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
        border: 2px solid #223F68;
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
      background-color: #223F68;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
      font-size: 25px;
      font-weight: 500;
      color: #F8F9F7;
      cursor: pointer;
      outline: none;
      -webkit-appearance: none;
      display: flex;
      align-self: center;
}
    }
    `;
    return (
      <StyledForm onSubmit={submitForm}>
        <label htmlFor="firstName">First Name</label>
        <input 
              name="firstName" 
              id="firstName" 
              type="text" 
              placeholder="first name..." 
              onChange={changeHandler}
              value={formData.firstName}/>
        <label htmlFor="lastName">Last Name</label>
        <input 
              name="lastName" 
              id="lastName" 
              type="text" 
              placeholder="last name..." 
              onChange={changeHandler}
              value={formData.lastName}/>
          <label htmlFor="email">Email</label>
          <input 
              name="email" 
              id="email" 
              type="email" 
              placeholder="email..." 
              onChange={changeHandler}
              value={formData.email}/>
          <label htmlFor="password">Password</label>
          <input 
              name="password" 
              id="password" 
              type="password" 
              placeholder="new password..." 
              onChange={changeHandler}
              value={formData.password}/>
        <button type="submit">Register</button>
      </StyledForm>
    );
  };

  export default Register;