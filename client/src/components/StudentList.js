import React, {useState, useEffect} from "react";
import StudentForm from "./StudentsForm";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {Link } from "react-router-dom";
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
        // background-color: #457B9D;
  `;
  const FormNav = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: end;
        border: 2px solid gray;
        padding-bottom: 3%;

        h2 {
            color:#F8F9F7;
        }
        
    `;
    const StudentCard = styled.div`
        width: 10%;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: wrap;
        border: 2px solid #F8F9F7;
        div {
            height: 100px;
            padding: 5px;

            h2, p {
                color: #F8F9F7;
            }
        }
    `;
    const DataContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        justify-content: start;
        align-items: center;
        background-color: #457B9D;
    `;
  return (
    <Container>
        
        <DataContainer>
    {students.map((element, index) => {
            return (
            <Link to= {`/student/${element.id}`}>
            <StudentCard key={index}>
                <div>
                    <h3>{element.student_name}</h3>
                </div>
                <div>
                    <h3>{element.major}</h3>
                </div>
            </StudentCard>
            </Link>
            );
        })}
        </DataContainer>
    <FormNav>
        <StudentForm />
    </FormNav>
    </Container>
  );
}
export default StudentList;
