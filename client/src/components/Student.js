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
        width: 200px;
        height: 110px;
        background-color: #F8F9F7;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: wrap;
        box-shadow: 2px 2px 10px 10px #223F68;
        div {
            height: 100px;
            width: 100px;
            padding: 5px;

            h2, p {
                color: #457B9D;
                box-shadow: 2px 2px 10px 10px #223F68;
            }
        }
    `;
    const MessegesCard = styled.div`
        width: 200px;
        height: 110px;
        resize: auto;
        box-shadow: 2px 2px 10px 10px #F8F9F7;
        background-color: #F8F9F7;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: wrap;
        div {
            // height: 100px;
            // width: 100px;
            // padding: 5px;

            h2, p {
                color: #457B9D;
                // box-shadow: 2px 2px 10px 10px #223F68;
            }
        }
    `;
    const MessegeDataContainer = styled.div`
        width: 40%;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #457B9D;
    `;
    const ProjectDataContainer = styled.div`
        padding: 10px;
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #457B9D;
    `;
    const FormNav = styled.div`
    margin-top: 20px;
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
    const Feeds = styled.div`
    display:flex;
    justify-content: space-between;
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
        <Feeds>
        <ProjectDataContainer>
        {projects.map((element, index) => {
            return (
            // <Link to= {`/student/${element.id}`}>
            <ProjectCard key={index}>
                <div>
                    <h3>{element.project_name}</h3>
                    <span>{element.deadline}</span>
                </div>
            </ProjectCard>
            // </Link>
            );
        })}
        </ProjectDataContainer>
        <MessegeDataContainer>
        {message.map((item, index) => {
      return (
      <MessegesCard key={index}> 
        <div>
            <p>Messege Sent: {item.message}</p>
            <p>On: {item.date}</p>
            <p>{item.id}</p>
        </div>
      </MessegesCard>
      )
    })}
    </MessegeDataContainer>
    </Feeds>
        <FormNav>
            <ProjectForm studentId={props.match.params.id}/>
            <Messages studentId={props.match.params.id}/>
        </FormNav>
        </Container>
    </>
    );
}
export default Student;
