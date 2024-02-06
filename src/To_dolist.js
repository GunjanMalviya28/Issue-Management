"use client"
import './App.css';
import React, { useState } from "react";

const To_dolist = () => {
 const [title,settitle] = useState("")
 const [desc,setdesc] = useState("")
  return (
    <>
      <form>
      <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 " placeholder="Enter Issue here" 
      value={title} onChange={(e) => {settitle(e.target.value)}}/>
     
     <input type="text" className="text-2xl border-zinc-800 border-4 m-18 px-4 py-2" placeholder="Enter Description here" />
      
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Issue</button>
      </form>
    </>
  );
}

export default To_dolist
