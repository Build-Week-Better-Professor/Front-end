import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ProjectForm = (props) => {
    console.log(props.studentID);
    const [project, setProject] = useState({
      project_name: '',
      deadline: '',
    //   student_id: `${props.studentID.id}`
    //   student_id: localStorage.getItem('student_id'),
    });
  
    const changeHandler = (event) => {
        setProject({ ...project, [event.target.name]: event.target.value });
      console.log(event.target.value);
    };
  
    const submitForm = (event) => {
      event.preventDefault();
  
      axiosWithAuth()
        .post(`/projects`, project)
        .then((res) => {
          console.log(res.data);
          setProject({
            project_name: '',
            deadline: '',
            // student_id: `${props.studentID.id}`
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
        <label htmlFor="project_name">Project Name</label>
        <input
          name="project_name"
          id="project_name"
          type="text"
          placeholder="project name..."
          onChange={changeHandler}
          value={project.project_name}
        />
        <label htmlFor="deadline">Deadline</label>
        <input
          name="deadline"
          id="deadline"
          type="date"
          placeholder="deadline..."
          onChange={changeHandler}
          value={project.deadline}
        />
        <button type="submit">Add Project</button>
      </StyledForm>
    );
  };
  
  export default ProjectForm;