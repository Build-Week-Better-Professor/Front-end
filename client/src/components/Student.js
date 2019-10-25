import React, {useState, useEffect} from "react";
import ProjectForm from "./ProjectForm";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Messages from "./Messages";
import Header from "./Header";

const Student = props => {
    const [projects, setProjects] = useState([]);
    const [message, setMessage] = useState([])

    const ProjectCard = styled.div`
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
    const Container = styled.div`
            display: flex;
            flex-direction: column;
            // background-color: #457B9D;
    `;
    const getMessage = () => {
        axiosWithAuth()
        .get(`messages/students/${props.match.params.id}`)
        .then(res => {
        console.log('MESSAGE', res)
        setMessage(res.data);
        })
        .catch(err => console.log(err.response))
       }
       
       useEffect(() => {
       
        getMessage()
       
       },[props.match.params.id])

    useEffect(() => {
    axiosWithAuth()
         .get(`/projects/students/${props.match.params.id}`)
         .then(response => {
            setProjects(response.data);
             console.log("this is projects ", response.data);
         })
         .catch(error => {
             console.error(error);
         });
        }, [props.match.params.id])
    return(
        <>
        <Header/>
        <Container>
        <DataContainer>
        {projects.map((element, index) => {
            return (
            // <Link to= {`/student/${element.id}`}>
            <ProjectCard key={index}>
                <div>
                    <h3>{element.project_name}</h3>
                </div>
                <div>
                    <span>{element.deadline}</span>
                </div>
            </ProjectCard>
            // </Link>
            );
        })}
        {message.map((item, index) => {
      return (
      <ProjectCard key={index}> 
      <p>{item.message}</p>
      <p>{item.date}</p>
      <p>{item.id}</p>
      </ProjectCard>
      )
    })}
    </DataContainer>
        <FormNav>
            <ProjectForm studentId={props.match.params.id}/>
            <Messages studentId={props.match.params.id}/>
        </FormNav>
        </Container>
    </>
    );
}
export default Student;
