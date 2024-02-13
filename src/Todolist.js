"use client"
import './App.css';
import React, { useState } from "react";
import './Todolist.css';

const Todolist = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };
 
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if(mainTask.length > 0){
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="task-item">
          <div className="task-details">
            <h5 className="task-title">{t.title}</h5>
            <p className="task-desc">{t.desc}</p>
          </div>
          <button 
            onClick={() => deleteHandler(i)}
            className="remove-btn"
          >
            Remove
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <form className="form"onSubmit={submitHandler}>
        <input 
          type="text" 
          className="input-field" 
          placeholder="Enter Issue here" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type="text" 
          className="input-field" 
          placeholder="Enter Description here" 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)}
        />
        <button 
          type="submit" 
          className="submit-btn"
        >
          Add Issue
        </button>
      </form>
      <hr />
      <div className="task-list">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
}

export default Todolist;

