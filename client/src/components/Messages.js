import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import { fetchList, postList } from '../actions';

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
  
}
 const message = Object.keys(input)

    return (
    <div>
    
    {message.map((item, index) => {
      return (
      <div> 
      <p>{item.message}</p>
      <p>{item.date}</p>
      <p>{item.id}</p>
      </div>
      )
    })}
    
    <form className="msg-form" onSubmit={handleSubmit}>
    <h2>Message Form</h2>
    <label className="name-title">Student</label>
    <input className="msg-name"
    type="text" 
    name="student_id"
    value={input.student_id}
    placeholder="...enter name"
    onChange={handleChange}
    />
    
    <label className="date-title">Date</label> 
    <input className="msg-date"
    type="date" 
    name="date"
    value={input.date}
    placeholder="...enter date"
    onChange={handleChange} 
    />
    
    {/* <label className="msg-title">Message</label>  */}
    
    <textarea className="msg-box"
    type="text"
    value={input.text}
    name="message"
    placeholder="Send a message..."
    onChange={handleChange}
    />
    
    <button className="msg-btn" type="submit">Submit</button> 
    </form>
    </div>
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
