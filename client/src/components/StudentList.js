import React, {useState, useEffect} from "react";
import axios from "axios";
import StudentForm from "./StudentsForm";
import styled from "styled-components";
const StudentList = props => {
  const [students, setStudents] = useState([])
    useEffect(() => {
    const id = props.match.params.userID;
    console.log(id);
       axios
        .get(`https://better-professor-backend.herokuapp.com/students/user/${id}`)
        .then(response => {
            setStudents(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

  },[]);
  const RegisterPage = styled.div`
        display: flex;
        flex-direction:column;
        align-items: center;
        border: 2px solid gray;
        padding-bottom: 3%;
        background-color: #457B9D;

        h2 {
            color:#F8F9F7;
        }
        
    `;
  return (
    <RegisterPage>
        <h2>Add Students</h2>
        <StudentForm />
        {students.map((student, index) => {
            return (
            <div key={index}>
                <h2>{student.student_name}</h2>
                <p>{student.major}</p>
                <p>{student.project_name}</p>
                <span>{student.deadline}</span>
            </div>
            );
        })}
    </RegisterPage>
  );
}
export default StudentList;
