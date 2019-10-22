import React, { useState } from "react";

const StudentForm = props => {
  // console.log("this is our props",props);
  const [note, setNote] = useState({
    name: "",
    body: "",
    title: "",
    body: "",
    title: "",
    body: ""
  });
  const changeHandler = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Student Name</label>
      <input
        name="title"
        id="title"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={note.title}
      />
      <label htmlFor="title">Major</label>
      <input
        name="title"
        id="title"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={note.title}
      />
      <label htmlFor="title">Deadline</label>
      <input
        name="title"
        id="title"
        type="date"
        placeholder="title"
        onChange={changeHandler}
        value={note.title}
      />
      <label htmlFor="body">Project</label>
      <textarea
        name="body"
        id="body"
        placeHolder="Type your note here"
        onChange={changeHandler}
        value={note.body}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default StudentForm;