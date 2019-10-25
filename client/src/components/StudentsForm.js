import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const StudentForm = (props) => {
  const [student, setStudent] = useState({
    student_name: '',
    major: '',
    user_id: localStorage.getItem('user_id'),
  });


  

  const changeHandler = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post(`/students`, student)
      .then((res) => {
        console.log("this is from post", res.data);
        setStudent({
          student_name: '',
          major: '',
          user_id: localStorage.getItem('user_id'),
        });
      })
      .catch((err) => console.log(err.response));
  };

  const StyledForm = styled.form`
    width: 30%;
    height: 40vh;
    margin: auto 100px;
    padding: 32px;
    font-weight: bold;
    background-color: #F8F9F7;
    color: #223F68;
    // box-shadow: 2px 2px 10px 10px #223F68;
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
        align-items: start;
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
    `;
  return (
    <> 
    
    <StyledForm onSubmit={submitForm}>
      <label >Student Name</label>
      <input
        key= "student_name"
        name="student_name"
        type="text"
        placeholder="student name..."
        onChange={changeHandler}
        value={student.student_name}
      />
      <label >Major</label>
      <input
        name="major"
        key= "major"
        type="text"
        placeholder="major..."
        onChange={changeHandler}
        value={student.major}
      />
      <button type="submit">Add Student</button>
      
       
    </StyledForm>
    </>
  );
};

export default StudentForm;