import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import { fetchList, postList } from '../actions';
;

const Messages = props => {
console.log('NEW', props);
const [input, setInput] = useState({name: '', email: '', message: ''})

const handleChange = event => {
    setInput({
   ...input,
   [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
   event.preventDefault();
   props.postList()
}


    return (
    <div>
    <p>{props.message}</p>
    <p>{props.date}</p>
    
    <form className="msg-form" onSubmit={handleSubmit}>
    <h2>Message Form</h2>
    <label className="name-title">Name</label>
    <input className="msg-name"
    type="text" 
    name="name"
    value={input.name}
    placeholder="...enter name"
    onChange={handleChange}
    />
    
    <label className="email-title">Email</label> 
    <input className="msg-email"
    type="text" 
    name="email"
    value={input.email}
    placeholder="...enter email"
    onChange={handleChange} 
    />
    
    <label className="msg-title">Message</label> 
    
    <textarea className="msg-box"
    type="text"
    value={input.text}
    name="message"
    // id="message"
    placeholder="Send a message..."
    onChange={handleChange}
    />
    {/* <input className="msg-box"
    type="text" 
    name="message"
    // value
    placeholder=""
    // onChange={handleChange} 
    />  */}
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