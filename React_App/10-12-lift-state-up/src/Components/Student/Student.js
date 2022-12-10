import React from 'react'
import './Student.css'
import { useState } from 'react';

const Student = (props) => {
    const [studName, setStudName] = useState("");
    
    const student = "vishal";

    const ClickHandler = () => {
        setStudName(student);
        props.getData(student)
    }
    
  return (
    <div>
        <button onClick={ClickHandler}>Click Me </button>
        <h1>{studName}</h1>
    </div>
  );
}

export default Student