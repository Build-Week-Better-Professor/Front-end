import React, {useState, useEffect} from "react";
import axios from "axios";
import StudentForm from "./StudentsForm";
import styled from "styled-components";
import ProjectForm from "./ProjectForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const StudentList = props => {
    const [students, setStudents] = useState([])
    useEffect(() => {
       axiosWithAuth()
        .get(`/students/user/${localStorage.getItem('user_id')}`)
        .then(response => {
            setStudents(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

  },[]);
  const Container = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #457B9D;
  `;
  const RegisterPage = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: end;
        border: 2px solid gray;
        padding-bottom: 3%;

        h2 {
            color:#F8F9F7;
        }
        
    `;
  return (
    <Container>
    <RegisterPage>
        <StudentForm />
        <ProjectForm />
    </RegisterPage>
    <div>
    {students.map((element, index) => {
            return (
            <div key={index}>
                <h2>{element.student_name}</h2>
                <p>{element.major}</p>
            </div>
            );
        })}
    </div>
    </Container>
  );
}
export default StudentList;
