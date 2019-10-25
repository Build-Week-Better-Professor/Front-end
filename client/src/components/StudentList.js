import React, { useState, useEffect } from 'react';
import StudentForm from './StudentsForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9f7;
`;
const FormNav = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
  padding-bottom: 3%;
  background-color: #f8f9f7;

  h2 {
    color: #f8f9f7;
  }
`;
const StudentCard = styled.div`
  width: 270px;
  // box-shadow: 0 0 10px 5px lightgray;
  background-color: #f8f9f7;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    background: ${(props) => (props.primary ? '#457B9D' : '#fff')};
    color: ${(props) => (props.primary ? '#fff' : '#457B9D')};
    border: ${(props) =>
      props.primary ? '2px solid #2a2223' : '2px solid #457B9D'};
  }
  button {
    display: felx;
    align-self: center;
    width: 100px;
    height: 30px;
    background: ${(props) => (props.primary ? '#FFF' : '#457B9D')};
    color: ${(props) => (props.primary ? '#457B9D' : '#FFF')};
    border: 0;
    margin: 5px 10px;
    transition: 0.2s ease-in;
    border: ${(props) =>
      props.primary ? '2px solid #99f3eb' : '2px solid #457B9D'};
    &:hover {
      background: ${(props) => (props.primary ? '#457B9D' : '#fff')};
      color: ${(props) => (props.primary ? '#fff' : '#457B9D')};
      border: ${(props) =>
        props.primary ? '2px solid #2a2223' : '2px solid #457B9D'};
    }
  }
  div {
    h2,
    p {
      color: #457b9d;
      margin: 5px;
      text-decoration: none;
    }
  }
`;
const DataContainer = styled.div`
  width: 98%;
  align-self: center;
  padding: 10px 5px 30px 5px;
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #223f68;
  color: #457b9d;
`;

const StudentList = (props) => {
  const [students, setStudents] = useState([]);
  const [remove, setRemove] = useState([]);

  const getStudents = () => {
    axiosWithAuth()
      .get(`/students/user/${localStorage.getItem('user_id')}`)
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const deleteStudent = (id) => {
    axiosWithAuth()
      .delete(`/students/${id}`)
      .then((res) => {
        console.log(res);
        setRemove(res.data);
      })
      .catch((err) => console.log(err.response));
  };
  console.log(localStorage.getItem('first_name'));

  return (
    <>
      <Header />
      <h1>Welcome!</h1>
      <Container>
        <h2>Add new students or click on them for details.</h2>
        <DataContainer>
          {students.map((element, index) => {
            console.log('ELEMENT', element);
            return (
              <StudentCard key={index}>
                <Link to={`/student/${element.id}`}>
                  <div>
                    <h3>Name: {element.student_name}</h3>
                  </div>
                  <div>
                    <h3>Major: {element.major}</h3>
                  </div>
                </Link>
                <button onClick={() => deleteStudent(element.id)}>
                  Delete
                </button>
                {''}
              </StudentCard>
            );
          })}
        </DataContainer>
        <FormNav>
          <StudentForm />
        </FormNav>
      </Container>
    </>
  );
};
export default StudentList;
