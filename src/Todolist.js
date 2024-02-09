"use client"
import './App.css';
import React, { useState } from "react";

  const Todolist = () => {
    const [title,settitle] = useState("")
    const [desc,setdesc] = useState("")
    const[mainTask,setMainTask] = useState([])
    
   const submitHandler = (e)=>{
   e.preventDefault()
   setMainTask([...mainTask, {title,desc }]);
   settitle("")
   setdesc("")
   console.log(mainTask)
    }
 
   const deleteHandler=(i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
   }

    let renderTask = <h2>No Task Available</h2>;

    if(mainTask.length> 0){
      renderTask = mainTask.map((t,i)=>{
        return (
        <li key={i} className='="flex item-center justify-between mb-5'>
          <div className="flex justify-between mb-5 w-2/3">
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button 
        onClick={ ()=>{
        deleteHandler(i)
        }}
        className='bg-red-400  px-4 py-2 rounded font-bold'>Remove</button>
        </li>
     );
      })
    }
  

  return (
    <>
      <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800 border-4 px-4 py-2 m-8' placeholder="Enter Issue here" 
      value={title} onChange={(e) => {settitle(e.target.value)}}/>
     
     <input type="text" className='text-2xl border-zinc-800 m-8 border-4 px-4 py-2' placeholder="Enter Description here" value={desc} onChange={(e)=>{setdesc(e.target.value)}}/>
      
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Issue</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
      </div>
    </>
  )
}

export default Todolist
