import React from 'react';
import './App.css';
import Addnormal from './components/addnormal';
function App() {
  let empData = [
    {
      empId : 1,
      empName : "vishal",
      empSalary : 20000,
      empJoining : new Date(2022, 11, 25),
    },
    {
      empId : 2,
      empName : "hrishikesh",
      empSalary : 300000,
      empJoining : new Date(2022, 11, 22),
    },
    {
      empId : 3,
      empName : "rohan",
      empSalary : 20000,
      empJoining : new Date(2022, 2, 1),
    }
  ]
  return (
    <div className="App">
    <Addnormal id = {empData[0].empId} name = {empData[0].empName } salary = {empData[0].empSalary } joiningDate = {empData[0].empJoining.toISOString}/>
    

    </div>
  );
}

export default App;
