import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import { fetchList, postList } from '../actions';
import styled from "styled-components";

const StyledForm = styled.form`
 width: 50%;
//  height: 40.5vh;
//  margin: auto 100px;
 padding: 32px;
 font-weight: bold;
 background-color: #F8F9F7;
 color: #223F68;
 display: flex;
 flex-direction: column;
 margin-top: 10px;

 input {
     margin-bottom: 28px;
     padding: 0.5rem;
     font-size: 16px;
     width: 50%;
     display: flex;
     color: #223F68;
     border: 2px solid #223F68;
     align-self: flex-end;
 }
 label {
     display: flex;
     align-self: center;
     
 }
 button {
   max-width: 100%;
   width: 250px;
   margin: 20px 0;
   padding: 12px 20px;
   border-style: none;
   background-color: #457B9D;
   box-shadow: 0px 2px 2px lightgray;
   font-size: 25px;
   font-weight: 500;
   color: #F8F9F7;
   cursor: pointer;
   outline: none;
   -webkit-appearance: none;
   display: flex;
   align-self: flex-end;
}
textarea {
     padding: 0.5rem;
     font-size: 16px;
     width: 50%;
     display: flex;
     align-self: flex-end;
     color: #223F68;
     border: 2px solid #223F68;
}
 `;
const Messages = props => {
console.log('NEW', props);
const [input, setInput] = useState({message: '', date: '', student_id: `${props.studentId}`})

const handleChange = event => {
    setInput({
   ...input,
   [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
   event.preventDefault();
   props.postList(input)
   //This sets it up to empty after submit
   setInput({message: '', date: '', student_id: `${props.studentId}`})
  
}
 const message = Object.keys(input)

    return (
    <>
    
    {/* {message.map((item, index) => {
      return (
      <div> 
      <p>{item.message}</p>
      <p>{item.date}</p>
      <p>{item.id}</p>
      </div>
      )
    })} */}
    
    <StyledForm onSubmit={handleSubmit}>
    <label >Student</label>
    <input
    type="text" 
    name="student_id"
    value={input.student_id}
    placeholder="...enter name"
    onChange={handleChange}
    />
    
    <label >Date</label> 
    <input
    type="date" 
    name="date"
    value={input.date}
    placeholder="...enter date"
    onChange={handleChange} 
    />
    
    <textarea
    type="text"
    value={input.text}
    name="message"
    placeholder="Send a message..."
    onChange={handleChange}
    />
    
    <button type="submit">Send Messege</button> 
    </StyledForm>
    </>
    )
}

const mapStateToProps = state => {
return {
data: state.data,
isFetching: state.isFetching,
isPosting: state.isPosting,
error: state.error
  };
};
export default connect(mapStateToProps, { fetchList, postList })(Messages);
