import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Messages from './Messages';




const Student = props => {
const [message, setMessage] = useState([])
 


//get request to get messages
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
   
   },[])
    
   console.log('message', message); 
    return(
    <div>
        {/* <h1>{props.match.params.id}</h1> */}
        <Messages studentId={props.match.params.id}/>
        {message.map((item, index) => {
      return (
      <div> 
      <p>{item.message}</p>
      <p>{item.date}</p>
      <p>{item.id}</p>
      </div>
      )
    })}
    </div>
    )
}
export default Student;

