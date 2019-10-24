import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const Student = props => {
const [pupil, setPupil] = useState([])
const [message, setMessage] = useState([])
 
//get request to get student
const getStudent = () => {
 axiosWithAuth()
 .get(`students/user/${pupil.id}`)
 .then(res => {
 console.log('PUPIL', res)
 setPupil(res.data);
 })
 .catch(err => console.log(err.response))
}

useEffect(() => {

 getStudent()

},[])


//get request to get messages
const getMessage = () => {
    axiosWithAuth()
    .get(`messages/students/${message.id}`)
    .then(res => {
    console.log('MESSAGE', res)
    setMessage(res.data);
    })
    .catch(err => console.log(err.response))
   }
   
   useEffect(() => {
   
    getMessage()
   
   },[])
    
    
    return(
    <div></div>
    )
}
export default Student;

