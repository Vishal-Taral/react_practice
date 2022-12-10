import React from 'react'
import './Teacher.css'
import Student from '../Student/Student'
// import { useState } from 'react'

const Teacher = (props) => {
   
    const sendData = (data) => {
        console.log(data);
    }
  return (
    <div>Teacher
        <Student getData = {sendData}/>
        {/* <h1>{studentName}</h1> */}
    </div>
  )
}

export default Teacher