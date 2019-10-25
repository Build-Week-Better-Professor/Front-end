import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Messages from './Messages';
import Header from './Header';

const ProjectCard = styled.div`
  width: 250px;
  background-color: #f8f9f7;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  div {
    height: 100px;
    width: 100px;
    padding: 5px;

    h2,
    p {
      color: #457b9d;
      box-shadow: 2px 2px 10px 10px #223f68;
    }
  }
`;
const MessegesCard = styled.div`
  width: 250px;
  padding: 10px 10px 30px 10px;
  box-shadow: 2px 2px 10px 10px #f8f9f7;
  background-color: #f8f9f7;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  div {
    h2,
    p {
      color: #457b9d;
    }
  }
`;
const MessegeDataContainer = styled.div`
  width: 40%;
  padding: 10px 10px 30px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #223f68;
  h2 {
    color: #f8f9f7;
  }
`;
const ProjectDataContainer = styled.div`
  padding: 10px 10px 30px 10px;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #223f68;
  h2 {
    color: #f8f9f7;
  }
`;
const FormNav = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 3%;

  h2 {
    color: #f8f9f7;
  }
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Feeds = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Student = (props) => {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState([]);

  const getMessage = () => {
    axiosWithAuth()
      .get(`messages/students/${props.match.params.id}`)
      .then((res) => {
        console.log('MESSAGE', res);
        setMessage(res.data);
      })
      .catch((err) => console.log(err.response));
  };

  const getProjects = () => {
    axiosWithAuth()
      .get(`/projects/students/${props.match.params.id}`)
      .then((response) => {
        setProjects(response.data);
        console.log('this is projects ', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMessage();
    getProjects();
  }, [message, projects, props.match.params.id]);

  return (
    <>
      <Header />
      <h1>Schedule a project with them or send them a message.</h1>
      <Container>
        <Feeds>
          <ProjectDataContainer>
            <h2>Projects Connected to Student:</h2>
            {projects.map((element, index) => {
              return (
                <ProjectCard key={index}>
                  <h3>Name: {element.project_name}</h3>
                  <span>Deadline: {element.deadline}</span>
                </ProjectCard>
              );
            })}
          </ProjectDataContainer>
          <MessegeDataContainer>
            <h2>Messages Sent to Student: </h2>
            {message.map((item, index) => {
              return (
                <MessegesCard key={index}>
                  <div>
                    <p>{item.message}</p>
                    <p>{item.date}</p>
                    <p>{item.id}</p>
                  </div>
                </MessegesCard>
              );
            })}
          </MessegeDataContainer>
        </Feeds>
        <FormNav>
          <ProjectForm studentId={props.match.params.id} />
          <Messages studentId={props.match.params.id} />
        </FormNav>
      </Container>
    </>
  );
};
export default Student;
